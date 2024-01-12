// src/App.js
import Navigation from "../components/Navigation";
import TypingAnimation from '../components/TypingAnimation';

const ModiN1 = () => {
    return (
        <>
        <Navigation />
        <div class="mt-32">
        <div class="flex flex-col lg:flex-row" id='main'>     
            {/*Making the 1/5 first section*/}
            <div class="lg:w-1/5 md:w-1/2 w-full p-4 overflow-hidden relative">
                <div class="overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-transparent transition duration-300 group-hover:scrollbar-thumb-gray-700 group-hover:scrollbar-track-gray-100">
                    <p class="text-white text-lg mb-4 font-bold tracking-wide">On this page</p>
                    <ul class="mb-4" id="chapterList">
                        <li class="mb-2 text-gray-600"><a href="#chapters" class="flex items-center"><span class="mr-2 opacity-0 transition duration-300">&#8226;</span>Chapters</a></li>
                        <ul class="ml-5" id="topicList1">
                            <li class="mb-2 text-gray-600"><a href="#topic1" class="flex items-center"><span class="mr-2 opacity-0 transition duration-300">&#8226;</span>Introduction</a></li>
                            <li class="less-dist mb-2 text-gray-600"><a href="#topic2" class="flex items-center"><span class="mr-2 opacity-0 transition duration-300">&#8226;</span>INC's Stand Together Movement</a></li>
                            <li class="mb-2 text-gray-600"><a href="Bjp" class="flex items-center"><span class="mr-2 opacity-0 transition duration-300">&#8226;</span>2024: BJP in pole position. </a></li>
                        </ul>
                    </ul>
                </div>
            </div >

            {/*Makeing Middle or the 3/5 section contain most text*/}
            <div class="lg:w-3/5 md:w-1/2 w-full p-4 overflow-y-auto hover-scrollbar" style={{ height: '100vh', overflowX: 'hidden' }}>
                {/*Creating Introduction Section*/}
                < section id="topic1" class="overflow-y-auto" >
                    <h2 class=" linked-heading group flex items-center mb-0" data-id="introduction">
                        <a class="text-white tap-highlight-transparent outline-none data-[focus-visible=true]:1-10 data-[focus-visible=true]:outline-2 data-[focus-visible-true]routline-focus data-focus-visible-true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity relative w-fit flex items-center gap-1 group text-inherit">
                            Introduction
                        </a>
                    </h2>


                    <p id="ntext" class="text-white">The tenure of Lok Sabha is scheduled to end on 16 June 2024. The previous general
                        elections were held in April–May 2019. After the election, National Democratic Alliance,
                        led by Bharatiya Janata Party, formed the union government, with Narendra Modi continuing
                        as Prime Minister.</p>
                    <div id="space" class="rounded border border-gray-300 overflow-hidden">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/modi_shah_nadda_collage-sixteen_nine-_3.png?VersionId=FCW6HZ8Yy70lxsc7fwSWA.8yxDhEnDI_&size=690:388" alt="Your Image" class="w-full h-auto" />
                        <hr class="border-gray-300" />
                    </div>
                </section >



                <section id="topic2" class="overflow-y-auto">
                    <h2 class="linked-heading group flex items-center mb-0" data-id="stand-together">
                        <a class="text-white tap-highlight-transparent outline-none data-[focus-visible=true]:1-10 data-[focus-visible=true]:outline-2 data-[focus-visible-true]routline-focus data-focus-visible-true]:outline-offset-2 text-1.6xl no-underline hover:opacity-80 active:opacity-disabled transition-opacity relative w-fit flex items-center gap-1 group text-inherit">
                            INC's 'Stand Together' Movement
                            <span class="opacity-0 transition-opacity group-hover:opacity-100 transition-all duration-300 ml-0.75 mt-0.25">
                                <svg aria-hidden="true" fill="none" focusable="false" style={{ height: '1.375rem' }} role="presentation" viewBox="0 0 24 24">
                                    <path d="M10 3L8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M16 3L14 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M3.5 9H21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M2.5 15H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                </svg>
                            </span>
                        </a>
                    </h2>

                    <p id="ntext" className="flex items-center">
                        <a href="https://www.inc.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                            <span className="mr-1">Indian National Congress</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3.5 h-3.5 align-middle">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>&nbsp;
                        {/* Adding a link */}
                        <span class="text-gray-500">party leaders Sonia Gandhi and Rahul Gandhi joined other key opposition leaders.</span>
                    </p>

                    <p class="mt-[-1.65rem] text-gray-500"><span>party leaders Sonia Gandhi and Rahul Gandhi joined
                        other key opposition leaders – including Sharad Pawar, Arvind Kejriwal, Sitaram Yechury and
                        Lalu Prasad Yadav – at a two-day meeting in Mumbai, India’s financial and entertainment capital.
                        Their goal was to set up a direct fight by putting one contestant against a BJP candidate
                        in each voting district.
                        The opposition parties formed the alliance in June and are challenging Modi’s party on
                        its economic record, rising unemployment and a host of other domestic problems, including rising
                        anti-Muslim sentiment.
                        <br /> <br />
                        <span>
                            “We will be travelling to different locations to spread the word. The meetings will ensure that
                            those at the centre will lose for sure. It will also ensure the freedom of media as well. We will
                            stand together,” Nitish Kumar, chief minister of Bihar state, said at a news conference after the
                            two-day meeting, according to The Indian Express newspaper .
                            Mallikarjun Kharge, the Congress party president, said all segments of society, including public
                            intellectuals and journalists, had been at the receiving end of the BJP’s “authoritarian misrule”.</span></span></p>

                    <h2 class="linked-heading group flex items-center mb-0" data-id="#topic3">
                        <a class="text-white tap-highlight-transparent outline-none data-[focus-visible=true]:1-10 data-[focus-visible=true]:outline-2 data-[focus-visible-true]routline-focus data-focus-visible-true]:outline-offset-2 text-1.6xl no-underline hover:opacity-80 active:opacity-disabled transition-opacity relative w-fit flex items-center gap-1 group text-inherit">
                            2024: BJP in pole position
                            <span class="opacity-0 transition-opacity group-hover:opacity-100 transition-all duration-300 ml-0.75 mt-0.25">
                                <svg aria-hidden="true" fill="none" focusable="false" style={{ height: '1.375rem' }} role="presentation" viewBox="0 0 24 24">
                                    <path d="M10 3L8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M16 3L14 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M3.5 9H21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M2.5 15H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                </svg>
                            </span>
                        </a>
                    </h2>


                    <p class=" text-gray-500"><span>Prime Minister Narendra Modi, like all successful political leaders,
                        has a panoptic vision, which, accompanied by an inspiring narrative, helps him identify key battles.
                        He then draws up deft strategies of attack, strikes at the most opportune moment, even leading from the
                        front if need be, to vanquish any opposition he may encounter. Qualities that he demonstrated in full
                        measure in the recently-concluded assembly elections. The stakes were high both for Modi and the ruling
                        Bharatiya Janata Party (BJP), since this was the final round of assembly polls before the all-important
                        General Election 2024.
                        <br /> <br />
                        <span>
                            The BJP’s highest vote percentage, by contrast, has been 37.3 per cent, in the 2019 general election,
                            when it won 303 seats on its own. Its target this time is a 50 per cent vote share, along with its allies
                            in the National Democratic Alliance (NDA). Winning a third term will put Modi in the league of statesmen,
                            a mantle that Nehru had worn.</span></span></p>


                            <h2 class="linked-heading group flex items-center mb-0" data-id="#topic3">
                        <a class="text-white tap-highlight-transparent outline-none data-[focus-visible=true]:1-10 data-[focus-visible=true]:outline-2 data-[focus-visible-true]routline-focus data-focus-visible-true]:outline-offset-2 text-1.6xl no-underline hover:opacity-80 active:opacity-disabled transition-opacity relative w-fit flex items-center gap-1 group text-inherit">
                            H20 is overrated i like oxygen
                            <span class="opacity-0 transition-opacity group-hover:opacity-100 transition-all duration-300 ml-0.75 mt-0.25">
                                <svg aria-hidden="true" fill="none" focusable="false" style={{ height: '1.375rem' }} role="presentation" viewBox="0 0 24 24">
                                    <path d="M10 3L8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M16 3L14 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M3.5 9H21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M2.5 15H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                </svg>
                            </span>
                        </a>
                    </h2>       

                </section>
            </div >

            <div class="container lg:w-1/5 md:w-full w-full p-4 overflow-y-auto">
                <div class="AIsummary text-white">
                    <img style={{ height: '2.125rem' }} class="AIgif" src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif" />
                    <h2 id="AItext" class="linked-heading group flex items-center mb-0">
                        <a href="#" data-focus-visible="true" data-focus-visible-true="outline-offset-2" data-hover="opacity-80" data-active="opacity-disabled" data-tap-highlight-transparent="true" data-outline="none" data-1="1-10" data-2="outline-2" class="text-1.8xl no-underline hover:opacity-80 active:opacity-disabled transition-opacity relative w-fit flex items-center gap-1 group text-inherit">
                            Summary
                            <span class="opacity-0 transition-opacity group-hover:opacity-100 transition-all duration-300 ml-0.75 mt-0.25">
                                <svg aria-hidden="true" fill="none" focusable="false" style={{ height: '1.375rem' }} role="presentation" viewBox="0 0 24 24">
                                    <path d="M10 3L8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M16 3L14 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M3.5 9H21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M2.5 15H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                </svg>
                            </span>
                        </a>
                    </h2>
                </div>
                <div>
                    <TypingAnimation />
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default ModiN1