"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import StyledLink from "next/link";
import icon_share from "../../../public/img/icon_share.svg";
import icon_print from "../../../public/img/icon_print.svg";
import icon_arrowup from "../../../public/img/icon_arrowup.svg";
import icon_arrowdown from "../../../public/img/icon_arrowdown.svg";
import icon_download from "../../../public/img/icon_download.svg";
import Script from "next/script";
import "../../styles/common/boarddetailtemplate.css";
import { useState, useRef, useMemo, useEffect } from "react";

type BoardDetailItem = {
  id: number;
  title: string;
  created_at?: Date | null;
  subtitle?: string | null;
  contents?: string | null;
  news_image?: string | null;
  detail_info?: string | null;
  additional_info?: string | null;
  attachment_path?: string | null;
  attachment_name?: string | null;
};

type Props = {
  title: string;
  data: BoardDetailItem[];
};

export default function BoardDetailTemplate({ title, data }: Props) {
  const pathName = usePathname();
  const [file, setFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [kakaoReady, setKakaoReady] = useState(false);

  const currentId = Number(pathName.split("/").pop());
  const selectedItem = data.find((item) => item.id === currentId);
  const isNewsPage = pathName.startsWith("/news/");

  const shareText = isNewsPage ? [selectedItem?.title, selectedItem?.subtitle].filter(Boolean).join(" ") : selectedItem?.title;

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}${pathName}`;
  }, [pathName]);

  if (!selectedItem) {
    return null;
  }

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    if (isOpen) document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [isOpen]);

  const handleMainShare = () => {
    setIsOpen((v) => !v);
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("링크 복사 완료");
      setIsOpen(false);
    } catch {
      const i = document.createElement("input");
      i.value = shareUrl;
      document.body.appendChild(i);
      i.select();
      document.execCommand("copy");
      document.body.removeChild(i);
      alert("링크 복사 완료");
      setIsOpen(false);
    }
  };

  // shareUrl과 shareText가 undefined일 수 있으므로 기본값을 명시적으로 지정
  const safeShareUrl = shareUrl ?? "";
  const safeShareText = shareText ?? "";

  const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(safeShareUrl)}&text=${encodeURIComponent(safeShareText)}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(safeShareUrl)}`;
  const naverUrl = `https://share.naver.com/web/shareView?url=${encodeURIComponent(safeShareUrl)}&title=${encodeURIComponent(safeShareText)}`;

  const sortedData = [...data].sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return dateA - dateB;
  });

  const currentIndex = sortedData.findIndex((item) => item.id === selectedItem.id);
  const previousItem = currentIndex > 0 ? sortedData[currentIndex - 1] : null;
  const nextItem = currentIndex < sortedData.length - 1 ? sortedData[currentIndex + 1] : null;

  const getDisplayText = (title: string, subtitle?: string | null) => {
    return [title, subtitle].filter(Boolean).join(" ");
  };

  const formatDate = (date: Date | null | undefined) => {
    return date?.toISOString().split("T")[0] || "";
  };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   setFile(selectedFile || null);
  // };

  // const handleFileClick = () => {
  //   fileInputRef.current?.click();
  // };

  // const handleDownloadClick = () => {
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = file.name;
  //     link.click();
  //     URL.revokeObjectURL(url);
  //   }
  // };

  const getAttachmentHref = (p?: string | null) => {
    if (!p) return "";
    // 지금처럼 DB에 "전체 URL"을 저장해둔 경우 그대로 사용
    if (p.startsWith("http")) return p;
    // 권장: DB엔 'attachments/..xlsx'만 저장하고, 서버 라우트에서 서명 URL 발급
    return `/api/attachments/download?path=${encodeURIComponent(p)}`;
  };

  const shareKakaoLink = () => {
    // @ts-ignore
    window.Kakao.Link.createCustomButton({
      container: "#kakao-link-btn",
      templateId: 73967,
    });
  };

  const onShareKakaoClick = () => {
    shareKakaoLink();
  };

  // <Script
  //   src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
  //   strategy="afterInteractive"
  //   onLoad={() => {
  //     if (window.Kakao && !window.Kakao.isInitialized()) {
  //       window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY!);
  //     }
  //   }}
  // />;

  // useEffect(() => {
  //   const kakao = (window as any).Kakao;
  //   if (!kakao) return;
  //   if (!kakao.isInitialized()) {
  //     kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY!);
  //   }
  //   kakao.Share.createCustomButton({
  //     container: "#kakao-link-btn",
  //     templateId: 73967,
  //     templateArgs: {
  //       title: shareText || "",
  //       url: shareUrl,
  //     },
  //   });
  // }, [shareText, shareUrl]);

  const handleKakaoShare = () => {
    const kakao = (window as any).Kakao;
    if (!kakao) {
      alert("카카오 SDK가 로드되지 않았습니다. 네트워크/차단기 설정을 확인해주세요.");
      return;
    }
    if (!kakao.isInitialized()) {
      const appKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
      if (!appKey) {
        alert("Kakao App Key가 설정되어 있지 않습니다.");
        return;
      }
      try {
        kakao.init(appKey);
      } catch (e) {
        console.error(e);
        alert("카카오 초기화에 실패했습니다.");
        return;
      }
    }
    kakao.Share.sendDefault({
      objectType: "feed",
      content: { title: "", description: "", imageUrl: "https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },
      buttons: [{ title: "바로가기", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } }],
    });
  };

  return (
    <div className="container">
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const kakao = (window as any).Kakao;
          if (!kakao) {
            console.error("Kakao SDK not found on window");
            setKakaoReady(false);
            return;
          }
          try {
            if (!kakao.isInitialized()) {
              const appKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY as string | undefined;
              if (!appKey) {
                console.error("Missing env: NEXT_PUBLIC_KAKAO_JS_KEY");
                setKakaoReady(false);
                return;
              }
              kakao.init(appKey);
            }
            setKakaoReady(true);
          } catch (e) {
            console.error("Kakao init error:", e);
            setKakaoReady(false);
          }
        }}
      />
      <h1 className="board-detail-title">{title}</h1>
      <h2 className="board-detail-subtitle">{isNewsPage ? getDisplayText(selectedItem.title, selectedItem.subtitle) : selectedItem.title}</h2>
      <p className="board-detail-date">{formatDate(selectedItem.created_at)}</p>
      <div className="board-detail-icon-wrapper">
        <div className="relative" ref={menuRef}>
          <button type="button" className="board-detail-icon cursor-pointer border-0 bg-transparent p-0" onClick={handleMainShare} title="공유">
            <Image src={icon_share} alt="share" />
          </button>

          {/* 공유 메뉴 */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 rounded-md border border-[#E5E5E5] bg-white shadow z-50 px-[10px] py-[15px]">
              <button onClick={copyUrl} className="w-full text-left px-4 py-2 hover:bg-[#F7F7F7]">
                URL 복사
              </button>
              <a href={xUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F7F7F7]">
                X로 공유
              </a>
              <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F7F7F7]">
                Facebook 공유
              </a>
              <a href={naverUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-[#F7F7F7]">
                네이버 블로그 공유
              </a>
              <button id="kakao-link-btn" type="button" onClick={handleKakaoShare} className="w-full text-left px-4 py-2 hover:bg-[#F7F7F7]">
                카카오톡 공유
              </button>
            </div>
          )}
        </div>
        <Image src={icon_print} alt="icon_print" onClick={() => window.print()} />
      </div>
      <div className="board-detail-contents-wrapper">
        {!selectedItem.contents && !selectedItem.detail_info && !selectedItem.additional_info && (!isNewsPage || !selectedItem.news_image) ? (
          <div className="board-detail-contents">
            <p className="text-center text-lg">게시물이 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="board-detail-contents">
              <p className={`${isNewsPage ? "leading-[33.6px] tracking-wide" : "pb-[10px] text-center"}`}>{selectedItem.contents}</p>
            </div>
            {!isNewsPage ? (
              <div>
                <p className={`${selectedItem.detail_info ? "board-detail-info-marker" : "leading-[33.6px]"}`}>{selectedItem.detail_info}</p>
                <p className={`${selectedItem.additional_info ? "board-detail-info-marker leading-[33.6px]" : "leading-[33.6px]"}`}>{selectedItem.additional_info}</p>
              </div>
            ) : null}
            {isNewsPage && selectedItem.news_image && <Image className="mt-[80px]" src={selectedItem.news_image} width={859} height={638} alt="news_image" />}
          </>
        )}
      </div>
      {!isNewsPage ? (
        <>
          <div className="bg-[#E7E7E7] my-[24px] mx-[16px] py-[24px] px-[32px] flex justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <span className="board-fileupload-title">첨부파일</span>
              {selectedItem.attachment_name ? (
                <div className="flex items-center w-[1399px] justify-between cursor-pointer">
                  <p className="board-fileupload-filename">
                    <a href={getAttachmentHref(selectedItem.attachment_path)} download={selectedItem.attachment_name.trim()} className="flex items-center gap-[24px]">
                      {selectedItem.attachment_name}
                    </a>
                  </p>
                  <a href={getAttachmentHref(selectedItem.attachment_path)} download={selectedItem.attachment_name.trim()} className="flex items-center gap-[24px]">
                    <Image src={icon_download} alt="icon_download" />
                  </a>
                </div>
              ) : (
                <div className="flex items-center w-[1399px] justify-between cursor-pointer">
                  <div className="file-empty-message">첨부된 파일이 없습니다</div>
                  <Image src={icon_download} alt="icon_download" />
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
      <div className="flex flex-col gap-[24px] border-t-4 border-black pl-[42px] py-[24px]">
        {previousItem && (
          <div className="flex items-center gap-[16px]">
            <Image src={icon_arrowup} alt="icon_arrowup" />
            <span>이전글</span>
            <StyledLink className="text-[#999999]" href={`${isNewsPage ? `/news/${previousItem.id}` : `/notices/${previousItem.id}`}`}>
              {getDisplayText(previousItem.title, previousItem.subtitle)}
            </StyledLink>
          </div>
        )}
        {nextItem && (
          <div className="flex items-center gap-[16px]">
            <Image src={icon_arrowdown} alt="icon_arrowdown" />
            <span>다음글</span>
            <StyledLink className="text-[#999999]" href={`${isNewsPage ? `/news/${nextItem.id}` : `/notices/${nextItem.id}`}`}>
              {getDisplayText(nextItem.title, nextItem.subtitle)}
            </StyledLink>
          </div>
        )}
      </div>
      <button className="board-detail-navigation-button">
        <StyledLink href={`${isNewsPage ? "/news" : "/notices"}`}>목록으로</StyledLink>
      </button>
    </div>
  );
}
