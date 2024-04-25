import me from "@/assets/IMG_5962.jpg";
import { H1 } from "./components/H1";
import { H2 } from "./components/H2";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  title: "안녕하세요! 권구민입니다 👋",
};

export default function Home() {
  return (
    <>
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 ">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">안녕하세요! <br/> 권구민입니다 👋</H1>
          <p className="text-center sm:text-start">
          Anyone can do it if have the will to do it!

          {/* 주니어 개발자로서 저는 새로운 기술과 트렌드를 배우고 적용하는 것을 즐깁니다!
타 언어를 배우는데 거리낌이 없으며, 항상 성장을 위해 노력하고 있습니다!
다양한 개발 프로젝트를 통해 실무적 경험을 쌓고 있으며, 현재는 LLM engineer에 대한 꿈을 꾸고 있습니다!
온라인 커뮤니티를 통해 다른 개발자들과 지식을 공유하고 함께 성장하는 것에 큰 관심을 가지고 있습니다. */}
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>AI 구민에게 무엇이든 물어보세요!</H2>
        <p>
  AI 구민을 활성화하려면 상단 표시줄에 있는<Bot className="inline pb-1" />
  아이콘을 클릭하세요.
</p>
<p>
  저에 대한 자세한 이력서 | 포트폴리오를 확인하고 싶다면?
  <a
    href="https://fuschia-humor-318.notion.site/baeafb8b2d1f49dea525dab32db51b08"
    className="text-primary hover:underline"
    target='_blank'
  >
    여기를 클릭하여 이동하세요!
  </a>
</p>
      </section>
    </section>
    </>
  );
}

