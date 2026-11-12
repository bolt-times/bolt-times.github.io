/*
  THUNDERBOLT TIMES EDITORIAL CONTENT
  ==================================
  This is the main file to edit for every new issue.
  All names and articles below are DEMONSTRATION content; replace before publishing.
  Dates use YYYY-MM-DD. Add new articles to ARTICLES and editions to ISSUES.
  Use local image paths like 'assets/photos/my-story.jpg' in the image field.
*/
window.TT_CONTENT = {
  site: {
    title: 'Thunderbolt Times',
    school: 'TMS',
    subtitle: 'The official student newspaper for TMS',
    tagline: 'Student stories. Student voices. Thunderbolt spirit.',
    contactEmail: '', // Optional: staff-supervised school newspaper email
    suggestionFormUrl: '', // Paste your school-approved Google Form or Microsoft Form URL
    clubMeetingText: 'Newspaper Club • Thursdays at lunch • Room 43',
    footerText: 'Made by students, for students.'
  },
  categories: [
    { id: 'articles', title: 'Articles', icon: '✎', description: 'School news, campus life, and original student writing.', topics: ['School News', 'Student Life', 'Sports & Events', 'Opinion & Features'] },
    { id: 'reviews', title: 'Reviews', icon: '★', description: 'Thoughtful takes on books, films, games and more.', topics: ['Books', 'Movies & Shows', 'Games & Apps'] },
    { id: 'interviews', title: 'Interviews', icon: '♫', description: 'Conversations with the people who make TMS special.', topics: ['Students', 'Teachers', 'Clubs'] },
    { id: 'comics', title: 'Comic Strip', icon: '☻', description: 'Stories, humor, and artwork from student creators.', topics: ['Latest Comics', 'Comic Archive'] },
    { id: 'games', title: 'Games', icon: '✦', description: 'Puzzles and fun challenges created by students.', topics: ['Puzzles', 'Trivia', 'Word Games'] },
    { id: 'looking-back', title: 'Looking Back', icon: '↺', description: 'Memories, milestones, and stories from the past.', topics: ['Throwback Photos', 'School History', 'Year in Review'] }
  ],
  issues: [
    { id: '2026-11-11', label: 'Issue 02', title: 'November Highlights', date: '2026-11-11', note: 'Meet the students bringing big ideas to campus.' },
    { id: '2026-10-28', label: 'Issue 01', title: 'Welcome to Thunderbolt Times', date: '2026-10-28', note: 'The first edition of our student-led newspaper.' }
  ],
  articles: [
    {
      slug: 'welcome-to-thunderbolt-times', title: 'We Have a School Newspaper. Now What?', category: 'articles', topic: 'Student Life', issue: '2026-10-28',
      author: 'Newspaper Club', date: '2026-10-28', minutes: 5, feature: true, emoji: '📰', theme: 'electric',
      excerpt: 'A new student-run publication is here. What should it actually be about?',
      image: 'assets/photos/newspaper-club-hero.svg',
      body: [
        { type: 'p', text: 'A new student-run publication is here. So what should it actually be about? Imagine a newspaper that covers what is happening at school, the questions nobody thinks to ask, the creative things students make, and the occasional completely unnecessary investigation.' },
        { type: 'p', text: 'Now imagine that you get a say in what goes into it. When people hear “school newspaper,” they might picture a few paragraphs about an upcoming assembly and a photo of someone cutting a ribbon. Fair enough—but what if a school newspaper could be something else entirely?' },
        { type: 'quote', text: 'This is your newspaper, too. Tell us what you want to read.' },
        { type: 'h2', text: 'So, what belongs in it?' },
        { type: 'p', text: 'We want this to be a place for all kinds of school stories. Need help getting started on an essay without asking AI to write it for you? Looking for a genuinely good book after finishing every BookTok recommendation? Tired of wearing the same hoodie every day—even though you were convinced last night that tomorrow would be different? There is room for those stories, and plenty more.' },
        { type: 'list', items: ['Comic strips and student artwork', 'Puzzles, sudokus, crosswords, and riddles', 'Competitions (yes, sometimes with prizes!)', 'What is happening around TMS and beyond', 'Student voices, opinions, and interviews', 'Sports, clubs, and student-made projects', 'The wonderfully random topics nobody else thought to cover'] },
        { type: 'image', src: 'assets/photos/story-ideas.svg', alt: 'An illustrated notebook surrounded by story ideas, a pencil, and a lightning bolt.', caption: 'Campus life, big questions, creative work, and the ideas that make us curious.' },
        { type: 'p', text: 'In other words, this is not just a place for formal announcements. It is a student newspaper, which means the topics can be serious, silly, surprising, or a little bit of everything. And well… the ideas keep coming.' },
        { type: 'h2', text: 'Why should you even bother reading?' },
        { type: 'p', text: 'We are not forcing anyone to read. But would it be nice to have a place where students can feel understood—a place to see their experiences reflected in the stories, opinions, and voices of people around them? With a click, you can find something that helps you feel connected to your school community.' },
        { type: 'p', text: 'Maybe you want to support a friend, find out what is happening on campus, discover a perspective you had not considered, or just have a bit of fun during the day. There is something here for you. And the best part? You do not have to love reading to find something you enjoy.' },
        { type: 'p', text: 'This newspaper is more than long articles like this one. Look for interviews with classmates, comics to make you laugh, news from around TMS, student opinions, creative pieces, and little tidbits you did not know you needed until you stumbled across them.' },
        { type: 'p', text: 'There is more to a school community than the classes you attend, the assignments you finish, and the people you happen to sit next to. Small stories, unexpected achievements, funny moments, and shared experiences can make a school feel like a community.' },
        { type: 'p', text: 'How often do you get to hear directly from the people you see in the hallways every day? How often do you discover something interesting about a classmate, learn about an event you might have missed, or find an opinion that makes you stop and think? Our newspaper gives those moments a place to live. It is a chance to celebrate the people around us and share what matters to students.' },
        { type: 'p', text: 'You do not have to read every story, agree with every opinion, or be especially interested in journalism. Give a comic a try, read an interview, see what is happening around school, or check out what your friends have been making. You might find something you enjoy—or see TMS a little differently.' },
        { type: 'h2', text: 'So, why us?' },
        { type: 'p', text: 'You might be wondering why we need another source of school news. Broadcast journalism, the yearbook, and school newsletters already do important work. Broadcasts bring news to life through video and reporting. The yearbook captures memories from the whole school year. Newsletters keep students and families informed about important updates. Each has its own purpose and strengths.' },
        { type: 'p', text: 'We are not here to replace any of them. We are here to add another piece to the picture: a place for everyday stories, opinions, interests, and experiences that might not fit in a broadcast, a yearbook, or a school-wide announcement.' },
        { type: 'image', src: 'assets/photos/student-voices.svg', alt: 'An original illustration of student portraits sharing ideas in colorful speech bubbles.', caption: 'Different voices, different ideas—and a place for everyone to join the conversation.' },
        { type: 'p', text: 'Read something whenever you have a few minutes between assignments. Browse a comic, find out what classmates think, or catch up on what is happening around campus. We can cover current events, spotlight students, explore interesting topics, share creative work, and bring attention to ideas that might otherwise go unheard.' },
        { type: 'p', text: 'Most importantly, this newspaper is built around the student experience. Students should have a say in what gets discussed, what gets celebrated, and which stories deserve attention. It is not just information delivered to you; it is a place where your peers can contribute to the conversation. The ordinary can become interesting, the overlooked can get recognized, and the student body can see a little more of itself.' },
        { type: 'quote', text: 'Different platforms, different purposes. And this one? It is yours.' },
        { type: 'h2', text: 'Be nice, guys…' },
        { type: 'p', text: 'This is our first paper, and we worked really hard on it. Please be kind as we learn and grow. If you have constructive feedback or an idea for a future story, share it through the Suggestion Box page—we would love to hear from you.' }
      ]
    },
    {
      slug: 'behind-the-scenes-newspaper-club', title: 'Behind the Scenes at Newspaper Club', category: 'interviews', topic: 'Clubs', issue: '2026-11-11',
      author: 'Student Editorial Team', date: '2026-11-11', minutes: 3, emoji: '🎙️', theme: 'sky',
      excerpt: 'How ideas become headlines: meet the students creating each edition.', image: '',
      body: [
        { type: 'p', text: 'Every edition begins with a brainstorming session. Writers pitch story ideas, artists share sketches, and editors choose what to feature.' },
        { type: 'h2', text: 'What makes a good story?' },
        { type: 'p', text: 'Members say that curiosity is the most important ingredient. Ask questions, listen closely, and write about something you genuinely care about.' },
        { type: 'p', text: 'Interested in joining? Check the club information on our About page for the latest meeting details.' }
      ]
    },
    {
      slug: 'books-worth-sharing', title: 'Books Worth Sharing This Month', category: 'reviews', topic: 'Books', issue: '2026-11-11',
      author: 'Student Review Desk', date: '2026-11-11', minutes: 2, emoji: '📚', theme: 'peach',
      excerpt: 'A short collection of reading recommendations from students.', image: '',
      body: [
        { type: 'p', text: 'Looking for your next great read? Ask a friend, explore the library shelves, or revisit an old favorite.' },
        { type: 'h2', text: 'Our review approach' },
        { type: 'p', text: 'A helpful review explains what a story is about without giving away important surprises. It also shares what worked, what didn’t, and who might enjoy it.' },
        { type: 'p', text: 'Student reviewers: add your own recommendations to future editions!' }
      ]
    },
    {
      slug: 'the-mystery-of-the-missing-pencil', title: 'The Mystery of the Missing Pencil', category: 'comics', topic: 'Latest Comics', issue: '2026-11-11',
      author: 'Student Art Desk', date: '2026-11-11', minutes: 1, emoji: '✏️', theme: 'lavender',
      excerpt: 'A tiny mystery with a surprisingly familiar ending.', image: '',
      body: [
        { type: 'p', text: 'Panel 1: A student opens a backpack. “Where did my pencil go?”' },
        { type: 'p', text: 'Panel 2: The search begins! Desk? Binder? Jacket pocket?' },
        { type: 'p', text: 'Panel 3: The student discovers the pencil tucked behind one ear.' },
        { type: 'quote', text: 'Case closed.' },
        { type: 'p', text: 'Replace this sample with an image of your student-created comic. Add an image filename to the article data.' }
      ]
    },
    {
      slug: 'five-question-trivia', title: 'The Five-Question Trivia Challenge', category: 'games', topic: 'Trivia', issue: '2026-11-11',
      author: 'Student Games Desk', date: '2026-11-11', minutes: 2, emoji: '🧩', theme: 'mint',
      excerpt: 'Quick questions to challenge your curiosity.', image: '',
      body: [
        { type: 'p', text: 'Ready for a mini quiz? Think about the answers before scrolling to the bottom.' },
        { type: 'h2', text: 'Questions' },
        { type: 'list', items: ['Which planet is known as the Red Planet?', 'How many sides does a hexagon have?', 'What do bees collect from flowers?', 'What is the largest ocean on Earth?', 'How many minutes are in two hours?'] },
        { type: 'h2', text: 'Answers' },
        { type: 'p', text: 'Mars · Six · Nectar and pollen · Pacific Ocean · 120' }
      ]
    },
    {
      slug: 'a-look-back-at-school-traditions', title: 'A Look Back at School Traditions', category: 'looking-back', topic: 'School History', issue: '2026-10-28',
      author: 'Student History Desk', date: '2026-10-28', minutes: 2, emoji: '📷', theme: 'gold',
      excerpt: 'The little traditions that make school memories last.', image: '',
      body: [
        { type: 'p', text: 'From spirit days to classroom projects, school traditions create shared memories. This section will explore how our community has changed over time.' },
        { type: 'p', text: 'Ask a teacher or former student about a favorite school tradition and share your findings with the newspaper team.' }
      ]
    },
    {
      slug: 'small-acts-big-impact', title: 'Small Acts, Big Impact', category: 'articles', topic: 'Student Life', issue: '2026-11-11',
      author: 'Student Features Team', date: '2026-11-11', minutes: 3, emoji: '🌱', theme: 'mint',
      excerpt: 'Everyday ways students can make school a kinder, brighter place.', image: '',
      body: [
        { type: 'p', text: 'A welcoming school community is built through simple choices: including someone in a group, returning a lost item, or helping a classmate understand an assignment.' },
        { type: 'h2', text: 'One thing at a time' },
        { type: 'p', text: 'Think of one small action you can take this week to make your campus feel more welcoming.' }
      ]
    },
    {
      slug: 'creative-corner', title: 'Creative Corner: Share Your Art', category: 'articles', topic: 'Opinion & Features', issue: '2026-11-11',
      author: 'Student Arts Team', date: '2026-11-11', minutes: 2, emoji: '🎨', theme: 'lavender',
      excerpt: 'A space for poems, drawings, photography, and imaginative projects.', image: '',
      body: [
        { type: 'p', text: 'Art can tell a story that words cannot. We hope to feature creative work from students in every issue.' },
        { type: 'p', text: 'Whether you draw, write poetry, or take photographs, talk to the editorial team about submitting something for the next edition.' }
      ]
    }
  ]
};
