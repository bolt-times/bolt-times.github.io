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
      slug: 'welcome-to-thunderbolt-times', title: 'Welcome to Thunderbolt Times!', category: 'articles', topic: 'School News', issue: '2026-10-28',
      author: 'Newspaper Club', date: '2026-10-28', minutes: 2, feature: true, emoji: '⚡', theme: 'electric',
      excerpt: 'A new place for TMS students to share stories, art, curiosity, and ideas.',
      image: '',
      body: [
        { type: 'p', text: 'Welcome to Thunderbolt Times, a student-made newspaper filled with stories told by student voices! Our goal is to celebrate the creativity and experiences that make our school unique.' },
        { type: 'h2', text: 'What will you find here?' },
        { type: 'p', text: 'You can read articles, discover thoughtful reviews, hear from classmates in interviews, laugh at comics, try a puzzle, or revisit a favorite school memory.' },
        { type: 'quote', text: 'Big stories can start with a small idea.' },
        { type: 'p', text: 'This website will be updated with a new issue every two weeks. Check back for fresh voices and exciting additions!' }
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
