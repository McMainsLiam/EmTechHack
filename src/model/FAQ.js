export default [
  {
    title: 'What is a hackathon?',
    content: `"Hackathons provide a venue for self-expression and creativity through technology. People with technical backgrounds come together, form teams around a problem or idea, and collaboratively code a unique solution from scratch — these generally take shape in the form of websites, mobile apps, and robots."`,
  },
  {
    title: 'Why EmTechHack?',
    content: `UTD Blockchain believes that real technological progress is achieved by those working on the bleeding edge. We want to encourage this work by sponsoring a hackathon that emphasizes creativity through by using the newest technologies, whether that be blockchain, AI, machine learning, virtual/augmented/extended reality, or IoT.`,
  },
  {
    title: 'When is EmTechHack?',
    content:
      'EmTechHack will be held on October 19th - 20th. Check-in starts at 9 AM on the 19th and continues until 10 AM.',
  },
  {
    title: 'Where is EmTechHack?',
    content:
      'EmTechHack will be held at The University of Texas at Dallas in the Engineering and Computer Science West building.',
  },
  {
    title: 'Do I need programming experience?',
    content:
      'No, no previous programming experience is required to participate in EmTechHack. In fact, we encourage students of any major to participate including business, design, economics, finance, engineering, and natural science.',
  },
  {
    title: 'Do we supply travel reimbursements?',
    content:
      'Unfortunately, EMTechHack will not be able to provide travel reimbursements for its participants this year. Be sure to check back next year to watch for changes.',
  },
  {
    title: 'How can I volunteer for EMTechHack?',
    content:
      'You should bring some form of university ID, an ID proving you are 18 or older, laptop, chargers, your teammates, and anything else you will need for your weekend.',
  },
  {
    title: 'Will I annoy people if I ask for help?',
    content:
      'No, of course not! Hackathons are for learning, exploring your ideas, and creating something new. If you are ever stuck on a problem, find one of our technical volunteers to give you a hand.',
  },
  {
    title: 'What should I bring?',
    content:
      'You should bring some form of university ID, an ID proving you are 18 or older, laptop, chargers, your teammates, and anything else you will need for your weekend.',
  },
  {
    title: 'How much does it cost?',
    content:
      'EMTechHack is completely free due to the generosity of our sponsors! Students need not pay any fees of any kind to participate.',
  },
  {
    title: 'Will there be food?',
    content: `Yes! EMTechHack will supply all of your meals as well as a midnight snack for all registered hackers. Snacks
            will also be provided throughout the event.`,
  },
  {
    title: 'What should I wear?',
    content: `Whatever you are most comfortable in. Button down and slacks, or pajamas and slippers. We only ask that you
            dress appropriately for on-campus activities. Use common sense.`,
  },
  {
    title: 'Will there be prizes?',
    content: `Of course! There will be over $1,000 in prizes for all of the best projects. Everyone who attends will also
            receive a free t-shirt designed specifically for the event.`,
  },
]

const colors = [
  {
    firstColor: '#232323',
    secondColor: '#2D2D2D',
  },
  {
    firstColor: '#2D2D2D',
    secondColor: '#282828',
  },
  {
    firstColor: '#303030',
    secondColor: '#262525',
  },
]

export const getGradientColorFromIndex = (index, isFirst) =>
  colors[index % colors.length][isFirst ? 'firstColor' : 'secondColor']
