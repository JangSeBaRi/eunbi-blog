/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import { useEffect, useState } from "react";

export default function Home() {
    const [os, setOs] = useState<string>("");

    useEffect(() => {
        const mobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());

        if (mobile) {
            var userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.search("android") > -1) {
                setOs("android");
            } else if (
                userAgent.search("iphone") > -1 ||
                userAgent.search("ipod") > -1 ||
                userAgent.search("ipad") > -1
            ) {
                setOs("ios");
            } else {
                setOs("otehr");
            }
        } else {
            setOs("pc");
        }
    }, []);

    let timer: any;
    let schInterval: any;

    function participate() {
        // if (os == "pc") {
        //     // location.href = "웹주소 입력";
        //     console.log('web')
        // }
        // function clearTimer() {
        //     clearInterval(schInterval);
        //     clearTimeout(timer);
        // }
        // function intervalSch() {
        //     // 매 인터벌 마다 웹뷰가 활성화 인지 체크
        //     if (document.hidden || (document as any).webkitHidden) {
        //         // 웹뷰 비활성화
        //         clearTimer(); // 앱이 설치되어있을 경우 타이머 제거
        //     } else {
        //         // 웹뷰 활성화
        //         console.log("타이머 동작");
        //     }
        // }

        // // 앱 실행(iOS인 경우)
        var desktopFallback = "https://youtube.com/watch?v=4KnNVK-udTU",
            mobileFallback = "https://youtube.com/watch?v=4KnNVK-udTU",
            app = "vnd.youtube://4KnNVK-udTU";
        const w = window as Window;

        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            w.location = app;
            w.setTimeout(function () {
                w.location = mobileFallback;
            }, 25);
        } else {
            w.location = desktopFallback;
        }

        function killPopup() {
            w.removeEventListener("pagehide", killPopup);
        }

        w.addEventListener("pagehide", killPopup);

        // // 앱이 설치 되어있는지 체크
        // schInterval = setInterval(intervalSch, 500);

        // timer = setTimeout(function () {
        //     if (os === "android") {
        //         location.href = "https://play.google.com/store/apps/details?id=com.twitter.android&hl=ko";
        //     } else if (os === "ios") {
        //         location.href = "https://apps.apple.com/kr/app/twitter/id1482454543";
        //     }
        //     clearInterval(schInterval);
        // }, 2000);
    }

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const categoryList = [
        {
            id: "home",
            label: "홈",
            icon: <HomeIcon fontSize="small" className=" group-hover:text-blue-700 text-stone-700"></HomeIcon>,
        },
        {
            id: "publish",
            label: "웅 출판사",
            icon: (
                <CorporateFareIcon
                    fontSize="small"
                    className=" group-hover:text-blue-700 text-stone-700"
                ></CorporateFareIcon>
            ),
        },
        {
            id: "book",
            label: "책",
            icon: (
                <AutoStoriesIcon
                    fontSize="small"
                    className=" group-hover:text-blue-700 text-stone-700"
                ></AutoStoriesIcon>
            ),
        },
        {
            id: "daily",
            label: "일간 웅비",
            icon: (
                <SubscriptionsIcon
                    fontSize="small"
                    className=" group-hover:text-blue-700 text-stone-700"
                ></SubscriptionsIcon>
            ),
        },
        {
            id: "report",
            label: "보도자료",
            icon: <ArticleIcon fontSize="small" className=" group-hover:text-blue-700 text-stone-700"></ArticleIcon>,
        },
        {
            id: "collaboration",
            label: "웅비X포둥",
            icon: <GroupIcon fontSize="small" className=" group-hover:text-blue-700 text-stone-700"></GroupIcon>,
        },
    ];

    const snsList1 = [
        {
            id: "instagram",
            icon: (
                <a href="https://www.instagram.com/eun__bitamin/" target="_blank">
                    <InstagramIcon className="hover:text-pink-600 cursor-pointer"></InstagramIcon>
                </a>
            ),
        },
        {
            id: "facebook",
            icon: <FacebookIcon className="hover:text-blue-600 cursor-pointer"></FacebookIcon>,
        },
        {
            id: "youtube",
            icon: (
                <a href="https://www.youtube.com/@eun__bitamin" target="_blank">
                    <YouTubeIcon className="hover:text-red-600 cursor-pointer"></YouTubeIcon>
                </a>
            ),
        },
    ];

    const snsList2 = [
        {
            id: "facebook",
            icon: (
                <FacebookIcon
                    className="hover:text-blue-600 cursor-pointer"
                    fontSize="large"
                    onClick={participate}
                ></FacebookIcon>
            ),
        },
        {
            id: "instagram",
            icon: (
                <a href="https://www.instagram.com/eun__bitamin/" target="_blank">
                    <InstagramIcon className="hover:text-pink-600 cursor-pointer" fontSize="large"></InstagramIcon>
                </a>
            ),
        },
        {
            id: "youtube",
            icon: (
                <a href="https://www.youtube.com/@eun__bitamin" target="_blank">
                    <YouTubeIcon className="hover:text-red-600 cursor-pointer" fontSize="large"></YouTubeIcon>
                </a>
            ),
        },
    ];

    useEffect(() => {
        const html = document.querySelector("html")!!;
        if (openMenu) {
            html.scrollTo({ top: 0, behavior: "smooth" });
            html.style.overflow = "hidden";
        } else {
            html.style.overflow = "scroll";
        }
    }, [openMenu]);

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
            <div className="relative">
                <nav className="bg-stone-100 flex items-center justify-between h-14">
                    <ul className="flex items-center h-full pl-24 max-560px:hidden">
                        {categoryList.map((category) => {
                            const { id, label } = category;
                            return (
                                <li
                                    key={id}
                                    className="px-3 text-sm h-full flex items-center cursor-pointer hover:font-bold"
                                >
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex items-center gap-10 pr-24 max-810px:hidden">
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
                    <div className="flex flex-col items-end justify-center w-full h-full 560px:hidden">
                        <div
                            className="relative z-[2] flex flex-col justify-between h-[10px] mr-5 cursor-pointer"
                            onClick={() => {
                                setOpenMenu(!openMenu);
                            }}
                        >
                            <div
                                className="w-[20px] h-[2px] bg-stone-800 rounded-full transition-all duration-200 relative top-0"
                                style={openMenu ? { transform: "rotate(45deg)", top: 4 } : undefined}
                            />
                            <div
                                className="w-[20px] h-[2px] bg-stone-800 rounded-full transition-all duration-200"
                                style={openMenu ? { opacity: 0 } : undefined}
                            />
                            <div
                                className="w-[20px] h-[2px] bg-stone-800 rounded-full transition-all duration-200 relative top-0"
                                style={openMenu ? { transform: "rotate(-45deg)", top: -4 } : undefined}
                            />
                        </div>
                    </div>
                </nav>
                <main className="flex flex-col items-center max-560px:px-8">
                    <img
                        src="https://static.wixstatic.com/media/008770_0409ab0178c9422192d4deb681c97e68~mv2_d_2280_2280_s_2.jpg/v1/fill/w_93,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EB%A1%9C%EA%B3%A0%EC%A0%95%EB%B0%A9%ED%98%95.jpg"
                        alt="logo"
                        className="mt-7"
                    />
                    <span className="font-Londrina-Outline text-2xl mt-4">Eunbi.com</span>
                    <span className="mt-2">조은비</span>
                    <div className="relative mt-[72px]">
                        <Image
                            src={"/eunbi/3.jpeg"}
                            width={288}
                            height={288}
                            alt="eunbi_picture"
                            className="mx-3 rounded-full max-w-72 max-h-72"
                        />
                        <span className="absolute right-0 bottom-0 text-xs opacity-80 font-serif">
                            <span className="opacity-50">©</span> 은비
                        </span>
                    </div>
                    <div className="mt-10 text-lg font-serif flex flex-col items-center leading-6 font-bold">
                        <span className=" text-xl">조은비</span>
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
                                아무 생각 하기 싫어 아무개로 살래 잠시 im sick and tired
                                <span className="relative top-[2px]">⌟</span>
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>of my every day, keep it up 한 곡 더
                                아무 노래나 일단 틀어 아무렴 어때 its so boring 아무래도
                                <span className="relative top-[2px]">⌟</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2019</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>refresh가 시급한 듯해 쌓여가 스트레스가
                                배꼽 빠질 만큼만 폭소하고 싶은 날이야 What up my dawgs?
                                <span className="relative top-[2px]">⌟</span>
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>어디야 너희 올 때 병맥주랑 까까 몇 개 사
                                와 uh 클럽은 구미가 잘 안 당겨 우리 집 거실로 빨랑 모여
                                <span className="relative top-[2px]">⌟</span>
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>외부인은 요령껏 차단 시켜 밤새 수다 떨
                                시간도 모자라 누군 힘들어 죽겠고 누군 축제 괜히 싱숭생숭
                                <span className="relative top-[2px]">⌟</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2020</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>I want my youth back 좀 전까지 왁자지껄
                                하다 한 명 두 명씩 자릴 떠 왜들 그리 다운돼있어? 뭐가
                                <span className="relative top-[2px]">⌟</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2021</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>문제야 say something 분위기가 겁나 싸해
                                요새는 이런 게 유행인가 왜들 그리 재미없어? 아 그건 나도
                                <span className="relative top-[2px]">⌟</span>
                            </p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>마찬가지 Tell me what I got to do 급한
                                대로 블루투스 켜<span className="relative top-[2px]">⌟</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-[10px] text-center">
                            <p>2022</p>
                            <p>
                                <span className="relative -top-[3.5px]">⌜</span>아무 노래
                                <span className="relative top-[2px]">⌟</span>
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
                {openMenu && (
                    <div
                        className="absolute top-0 left-0 w-screen h-full bg-stone-800/[0.5] animate-fadein"
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    />
                )}
                <section
                    className="absolute top-0 z-[1] bg-white h-full transition-['right']"
                    style={{ width: "calc(100% - 40px)", right: openMenu ? 0 : "calc(-100% + 40px)" }}
                >
                    <header className="flex items-center h-14 border-b-[1px] border-b-stone-300">
                        <Image
                            src={"/eunbi/1.jpeg"}
                            width={40}
                            height={40}
                            alt="eunbi_picture"
                            className="mx-4 rounded-full"
                        />
                        <span className="text-sm">eun__bitamin blog</span>
                    </header>
                    <main>
                        <ul className="flex flex-col gap-3 pt-3">
                            {categoryList.map((category) => {
                                const { id, label, icon } = category;
                                return (
                                    <li key={id} className="pr-2">
                                        <button className="flex items-center py-3 pl-7 w-full rounded-r-full hover:bg-blue-50 group">
                                            {icon}
                                            <span className="ml-6 text-sm text-stone-700 font-semibold group-hover:text-blue-700">
                                                {label}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </main>
                </section>
            </div>
        </>
    );
}
