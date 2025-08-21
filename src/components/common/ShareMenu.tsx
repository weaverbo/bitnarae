"use client";
import { useMemo, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

interface KakaoSDK {
  isInitialized(): boolean;
  init(appKey: string): void;
  Share: {
    sendDefault(options: {
      objectType: "feed";
      content: {
        title: string;
        description: string;
        imageUrl: string;
        link: { mobileWebUrl: string; webUrl: string };
      };
      buttons: { title: string; link: { mobileWebUrl: string; webUrl: string } }[];
    }): void;
  };
}

type ShareMenuProps = {
  pathName: string;
  isNewsPage: boolean;
  title: string;
  subtitle?: string | null;
  kakaoObj?: KakaoSDK | null;
  onClose?: () => void;
};

export default function ShareMenu({ pathName, isNewsPage, title, subtitle, onClose }: ShareMenuProps) {
  const [kakaoObj, setKakaoObj] = useState<KakaoSDK | null>(null);

  // 공유 링크에 safeShareText를 추가해서 소개 문구를 넣어 ux 개선
  const shareText = useMemo(() => {
    return [title, isNewsPage ? subtitle : null].filter(Boolean).join(" ");
  }, [title, subtitle, isNewsPage]);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}${pathName}`;
  }, [pathName]);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("링크 복사 완료");
    } catch {
      alert("링크 복사 중 오류가 발생했습니다.");
    }
  };

  const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const naverUrl = `https://share.naver.com/web/shareView?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;

  const handleKakaoShare = () => {
    const kakao = typeof window !== "undefined" ? (window as any).Kakao : null;

    if (!kakao) {
      alert("카카오 SDK가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    try {
      if (!kakao.isInitialized()) {
        const appKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
        if (!appKey) {
          console.error("Missing env: NEXT_PUBLIC_KAKAO_JS_KEY");
          alert("Kakao App Key 설정을 확인해주세요.");
          return;
        }
        kakao.init(appKey);
      }

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: shareText || "공유",
          description: "",
          imageUrl: "https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png",
          link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
        },
        buttons: [{ title: "바로가기", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } }],
      });
    } catch (e) {
      console.error("Kakao share error:", e);
      alert("카카오 공유 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          const kakao = window.Kakao;
          if (!kakao) {
            console.error("Kakao SDK not found on window");
            return;
          }
          try {
            if (!kakao.isInitialized()) {
              const appKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
              if (!appKey) {
                console.error("Missing env: NEXT_PUBLIC_KAKAO_JS_KEY");
                return;
              }
              kakao.init(appKey);
            }
            setKakaoObj(kakao);
          } catch (e) {
            console.error("Kakao init error:", e);
          }
        }}
      />
      <div className="absolute right-0 mt-2 w-44 rounded-md border border-[#E5E5E5] bg-white shadow z-50 px-[10px] py-[15px]">
        <button
          onClick={async () => {
            await copyUrl();
            onClose?.();
          }}
          className="w-full text-left px-4 py-2 hover:bg-[#F7F7F7]"
        >
          URL 복사
        </button>
        <a
          href={xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 hover:bg-[#F7F7F7]"
          onClick={() => {
            setTimeout(() => onClose?.(), 0);
          }}
        >
          X로 공유
        </a>
        <a
          href={fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            setTimeout(() => onClose?.(), 0);
          }}
          className="block px-4 py-2 hover:bg-[#F7F7F7]"
        >
          Facebook 공유
        </a>
        <a
          href={naverUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 hover:bg-[#F7F7F7]"
          onClick={() => {
            setTimeout(() => onClose?.(), 0);
          }}
        >
          네이버 블로그 공유
        </a>
        <button
          type="button"
          onClick={() => {
            handleKakaoShare();
            setTimeout(() => onClose?.(), 0);
          }}
          className="w-full text-left px-4 py-2 hover:bg-[#F7F7F7]"
        >
          카카오톡 공유
        </button>
      </div>
    </>
  );
}
