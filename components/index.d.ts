/** CODED Juniors design system v2. Slide layouts are 1920x1080 HTML sections (Slides format) kept in components/<Name>/slide.html. */
export interface SlideLayout { /** Folder name */ name: string; /** Slides-format source path */ source: string; }
/** The program cover for weekend and partner programs: program name, type pill and Day 1 / Day 2 date tiles, with Codey at his laptop. Group: Slides · Start. Template deck slide id: cover. */
export declare const ProgramCoverSlide: SlideLayout;
/** The activity title on red: the activity name and "Day 1: [Day Name]" in yellow, with Codey standing proud. Group: Slides · Start. Template deck slide id: title. */
export declare const ActivityTitleSlide: SlideLayout;
/** The Ice Breaker divider: game name, how to answer, and Codey bursting through a wall. Group: Slides · Start. Template deck slide id: icebreaker. */
export declare const IceBreakerSlide: SlideLayout;
/** One ice-breaker or quiz round: two picture cards whose answer pills pop in on click. Group: Slides · Start. Template deck slide id: round. */
export declare const GameRoundSlide: SlideLayout;
/** The identity hook "You Are a [Designer] Today!", split with a red panel and Codey running. Group: Slides · Start. Template deck slide id: mission. */
export declare const YouAreASlide: SlideLayout;
/** The kid-facing goal of the day in one sentence with three coloured keywords, beside a photo of the finished product. Group: Slides · Start. Template deck slide id: today. */
export declare const TodayYouWillSlide: SlideLayout;
/** The big step divider: "Step 1" in yellow over "Designing!" in white. Group: Slides · Teach. Template deck slide id: step. */
export declare const StepDividerSlide: SlideLayout;
/** The question that comes before every definition, with Codey thinking. Group: Slides · Teach. Template deck slide id: question. */
export declare const BigQuestionSlide: SlideLayout;
/** The split definition slide: "What is [X]?" and a 3D icon on red, the one-line definition with coloured keywords on white. Group: Slides · Teach. Template deck slide id: definition. */
export declare const DefinitionSlide: SlideLayout;
/** A definition in three numbered cards (red, blue, amber). Group: Slides · Teach. Template deck slide id: threecards. */
export declare const ThreeCardsSlide: SlideLayout;
/** Two cards side by side: Weak vs Strong prompt, 2D vs 3D, With AI vs Without AI. Group: Slides · Teach. Template deck slide id: compare. */
export declare const CompareSlide: SlideLayout;
/** "FUN Fact! Did you KNOW?" with Codey's lightbulb idea. Group: Slides · Teach. Template deck slide id: funfact. */
export declare const FunFactSlide: SlideLayout;
/** The suspense slide "How?!" before a tool reveal, with the pink 3D question mark. Group: Slides · Teach. Template deck slide id: how. */
export declare const HowRevealSlide: SlideLayout;
/** The tool reveal "Using… [Tool Name]!" with the tool's logo on the white half. Group: Slides · Teach. Template deck slide id: tool. */
export declare const ToolRevealSlide: SlideLayout;
/** The fixed "How to Use AI!" slide with the three Codey badges: Be Creative, Use AI Responsibly, Stay Safe. Group: Slides · Teach. Template deck slide id: aisafety. */
export declare const HowToUseAISlide: SlideLayout;
/** "Credits are like Coins! Careful not to OVER use them." with the try limit. Group: Slides · Teach. Template deck slide id: credits. */
export declare const CreditsSlide: SlideLayout;
/** The "Activity / Time!" divider with clouds, a star and the Super Coder badge. Group: Slides · Build. Template deck slide id: activity. */
export declare const ActivityTimeSlide: SlideLayout;
/** One tool step: numbered actions on the left, the screenshot in a dark frame, the mentor-gate pill below. Group: Slides · Build. Template deck slide id: stepshot. */
export declare const StepScreenshotSlide: SlideLayout;
/** "Let's Get Writing!": a fill-in prompt in a red dashed box with coloured [BLANKS]. Group: Slides · Build. Template deck slide id: prompt. */
export declare const PromptTemplateSlide: SlideLayout;
/** A 4×2 choice grid of picture tiles: styles, themes, characters. Group: Slides · Build. Template deck slide id: pick. */
export declare const PickYourStyleSlide: SlideLayout;
/** "Challenge Time!" with the challenge in one sentence and Codey kneeling, ready. Group: Slides · Build. Template deck slide id: challenge. */
export declare const ChallengeTimeSlide: SlideLayout;
/** Four rule cards with 3D icons: safety, care, roles or tips. Group: Slides · Build. Template deck slide id: rules. */
export declare const FourRulesSlide: SlideLayout;
/** Game Time (Blooket, Kahoot) with the website pill and Codey jumping. Group: Slides · Build. Template deck slide id: game. */
export declare const GameTimeSlide: SlideLayout;
/** "BREAK Time! Let's Relax and Continue Later!" with Codey and his lemonade. Group: Slides · Build. Template deck slide id: break. */
export declare const BreakTimeSlide: SlideLayout;
/** The Day 2 recap: three steps done and today's step in a red card. Group: Slides · Close. Template deck slide id: recap. */
export declare const WhereDidWeStopSlide: SlideLayout;
/** Recap Stars: five questions, five stars, answers pop in on click. Group: Slides · Close. Template deck slide id: stars. */
export declare const RecapStarsSlide: SlideLayout;
/** Show & Tell with a sentence frame, so every kid can share. Group: Slides · Close. Template deck slide id: showtell. */
export declare const ShowAndTellSlide: SlideLayout;
/** The reflection: "What Did We Learn Today?" and "Which Part did you Enjoy the Most?". Group: Slides · Close. Template deck slide id: learned. */
export declare const WhatDidWeLearnSlide: SlideLayout;
/** The teaser for the next session, split with Codey waving. Group: Slides · Close. Template deck slide id: next. */
export declare const ComingUpNextSlide: SlideLayout;
/** The closing "THANKS! Have Fun Coding!" with the Arabic value stickers. Group: Slides · Close. Template deck slide id: thanks. */
export declare const ThanksSlide: SlideLayout;
/** The logo rules: the solo CODED Juniors logo, the partner lockup (CODED Juniors | KFH) and the Winter Camp logo. Group: Building blocks. */
export declare const LogoLockup: SlideLayout;
/** The signature emphasis: one to three key words per sentence coloured red, blue, then amber; yellow on red slides. Group: Building blocks. */
export declare const KeywordHeading: SlideLayout;
/** The rounded label pills: red eyebrow pills on light slides, white pills on red, the step and answer pills. Group: Building blocks. */
export declare const EyebrowPill: SlideLayout;
/** Numbered circles for steps and three-part definitions: red, blue, amber. Group: Building blocks. */
export declare const NumberDot: SlideLayout;
/** The white card: 32px corners, soft shadow, a 3D icon, a coloured title and a short line. Group: Building blocks. */
export declare const ContentCard: SlideLayout;
/** The mentor-gate pill that goes on every generate, build or submit step. Group: Building blocks. */
export declare const MentorGate: SlideLayout;
/** Codey, the CODED Juniors robot, in the pose that matches each slide's job. Group: Building blocks. */
export declare const CodeyPoses: SlideLayout;
/** The Arabic value stickers and the Super Coder badge, tilted on red. Group: Building blocks. */
export declare const StickerSet: SlideLayout;
/** Template placeholders: the dashed picture frame and the dark screenshot frame. Group: Building blocks. */
export declare const PlaceholderFrame: SlideLayout;
