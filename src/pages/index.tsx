/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Home() {
    const categoryList = [
        {
            id: "home",
            label: "홈",
        },
        {
            id: "publish",
            label: "출판사",
        },
        {
            id: "book",
            label: "책",
        },
        {
            id: "daily",
            label: "일간 웅비",
        },
        {
            id: "report",
            label: "보도자료",
        },
        {
            id: "collaboration",
            label: "웅비X포둥",
        },
    ];

    const snsList1 = [
        {
            id: "instagram",
            icon: <InstagramIcon className="hover:text-pink-600 cursor-pointer"></InstagramIcon>,
        },
        {
            id: "facebook",
            icon: <FacebookIcon className="hover:text-blue-600 cursor-pointer"></FacebookIcon>,
        },
        {
            id: "youtube",
            icon: <YouTubeIcon className="hover:text-red-600 cursor-pointer"></YouTubeIcon>,
        },
    ];

    const snsList2 = [
        {
            id: "facebook",
            icon: <FacebookIcon className="hover:text-blue-600 cursor-pointer" fontSize="large"></FacebookIcon>,
        },
        {
            id: "instagram",
            icon: <InstagramIcon className="hover:text-pink-600 cursor-pointer" fontSize="large"></InstagramIcon>,
        },
        {
            id: "youtube",
            icon: <YouTubeIcon className="hover:text-red-600 cursor-pointer" fontSize="large"></YouTubeIcon>,
        },
    ];
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <div>
                <nav className="bg-stone-100 flex items-center justify-between px-24">
                    <ul className="flex items-center">
                        {categoryList.map((category) => {
                            const { id, label } = category;
                            return (
                                <li key={id} className="px-3 py-[14px] text-sm cursor-pointer hover:font-bold">
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex items-center gap-10">
                        <span className="text-sm">eunbi@naver.com</span>
                        <ul className="flex items-center gap-3">
                            {snsList1.map((category) => {
                                const { id, icon } = category;
                                return (
                                    <li key={id} className="text-sm">
                                        {icon}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
                <main className="flex flex-col items-center">
                    <img
                        src="https://static.wixstatic.com/media/008770_0409ab0178c9422192d4deb681c97e68~mv2_d_2280_2280_s_2.jpg/v1/fill/w_93,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EB%A1%9C%EA%B3%A0%EC%A0%95%EB%B0%A9%ED%98%95.jpg"
                        alt="logo"
                        className="mt-7"
                    />
                    <span className="font-Londrina-Outline text-2xl mt-4">Eunbi.com</span>
                    <span className="mt-2">조은비</span>
                    <div className="relative mt-[72px]">
                        <img
                            src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMjAxMjhfNTgg%2FMDAxNjQzMzQyMTkyMTky.iui0JRvhb7MC5LICOEb_tEnq4XOtIvCuZlbx-jTz9-Qg.hBGCXFy5MorZZKgKV7o387uE3dTPuT2RFa4iaWrkTx0g.PNG.bora402319%2FprofileImage.png"
                            alt="profile"
                            className=" rounded-full w-72 h-72"
                        />
                        <span className="absolute right-0 bottom-0 text-xs opacity-80 font-serif">
                            <span className="opacity-50">©</span> 은비
                        </span>
                    </div>
                    <div className="mt-10 text-lg font-serif flex flex-col items-center leading-6 font-bold">
                        <span className=" text-xl">조은비</span>
                        <span className=" tracking-[-1px]">張世眞</span>
                    </div>
                    <div className="flex flex-col items-center gap-10 font-korean text-sm">
                        <div />
                        <span>{"(1995 ~ )"}</span>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>왜들 그리 다운돼있어? 뭐가 문제야 say something</p>
                            <p>분위기가 겁나 싸해 요새는 이런 게 유행인가</p>
                            <p>왜들 그리 재미없어? 아 그건 나도 마찬가지</p>
                            <p>Tell me what I got to do 급한 대로 블루투스 켜</p>
                            <p>아무 노래나 일단 틀어 아무거나 신나는 걸로</p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2018</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>아무렇게나 춤춰 아무렇지 않아 보이게
                                아무 생각 하기 싫어 아무개로 살래 잠시 im sick and tired⌟
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>of my every day, keep it up 한 곡 더
                                아무 노래나 일단 틀어 아무렴 어때 its so boring 아무래도⌟
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2019</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>refresh가 시급한 듯해 쌓여가 스트레스가
                                배꼽 빠질 만큼만 폭소하고 싶은 날이야 What up my dawgs?⌟
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>어디야 너희 올 때 병맥주랑 까까 몇 개 사
                                와 uh 클럽은 구미가 잘 안 당겨 우리 집 거실로 빨랑 모여⌟
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>외부인은 요령껏 차단 시켜 밤새 수다 떨
                                시간도 모자라 누군 힘들어 죽겠고 누군 축제 괜히 싱숭생숭⌟
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2020</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>I want my youth back 좀 전까지 왁자지껄
                                하다 한 명 두 명씩 자릴 떠 왜들 그리 다운돼있어? 뭐가⌟
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2021</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>문제야 say something 분위기가 겁나 싸해
                                요새는 이런 게 유행인가 왜들 그리 재미없어? 아 그건 나도⌟
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>마찬가지 Tell me what I got to do 급한
                                대로 블루투스 켜⌟
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2022</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>아무 노래
                            </p>
                        </div>
                    </div>
                    <span className="mt-20 text-sm font-mono">eunbi@naver.com</span>
                    <ul className="flex items-center gap-4 mt-16">
                        {snsList2.map((category) => {
                            const { id, icon } = category;
                            return <li key={id}>{icon}</li>;
                        })}
                    </ul>
                </main>
                <footer className="flex flex-col items-center font-serif text-xs bg-stone-100 py-2 gap-1 mt-16">
                    <span>
                        <span>©</span>은비
                    </span>
                    <span>eunbi@naver.com</span>
                </footer>
            </div>
        </>
    );
}
