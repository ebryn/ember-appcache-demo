import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let json = [
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Registration Windows",
        "speakers": [],
        "time": "",
        "description": "\n              \n            ",
        "id": "registration-windows"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Training Only",
        "speakers": [],
        "time": "8:30–9:30am",
        "description": "\n              <p>This registration window is reserved for folks attending one of our four training classes, to make sure they're processed and seated in time for class.</p>\n            ",
        "id": "training-only"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Training, Activities and Early Conference",
        "speakers": [],
        "time": "9:30am–5:00pm",
        "description": "\n              <p>All attendees are welcome to drop by to register for any EmberConf trainings, activities, and for early Conference registration. </p><p>While supplies last, we've got a special swag item for folks registering for anything on Monday, to help keep the Tuesday morning registration rush to a minimum.</p>\n            ",
        "id": "training,-activities-and-early-conference"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Trainings",
        "speakers": [],
        "time": "",
        "description": "\n              \n            ",
        "id": "trainings"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "A: Intermediate Ember\n              $\n              !",
        "speakers": [
          "Nate Bibler"
        ],
        "imageUrl": "images/bio-nate-bibler.jpeg",
        "time": "9:00am–12:30pm",
        "description": "\n              <p>This is a live training session of Code School's Ember screencasts (video walkthroughs of practical steps for building applications) that follow up the Try Ember course launched in late February. This course teaches Ember application development using the current versions of Ember and Ember CLI. Participating in a live training session gives you the opportunity to ask questions and get personalized feedback from our experts and support staff.</p><p>This course targets early-to-intermediate Ember developers who are looking to learn and use application testing techniques, create Handlebars helpers, integrate with Ember addons, develop custom components, and, most importantly, work with Ember Data.</p><p>Like Code School courses, this session is broken into small, focused, and comfortably consumable sections. Each section presents a new set of concepts and techniques. Following each section’s training portion, you will immediately use what you've learned to solve various coding and concept challenges.</p><p>It is expected that you come to this training session with an understanding of the basic concepts within Ember (the router, routes, templates, models, and components). If you're not there yet, be sure to get familiar with these concepts on your own or by completing Code School's Try Ember course.</p><p>Ticket price of $299, space limited.</p>\n            ",
        "id": "a:-intermediate-ember"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "B: Test-Driven Ember\n              $\n              !",
        "speakers": [
          "Toran Billups"
        ],
        "imageUrl": "images/bio-toran-billups.jpeg",
        "time": "–",
        "description": "\n              <p>This workshop is designed to provide both the beginner and intermediate JavaScript developer in the Ember ecosystem with a solid understanding of test-driven-development. If you're familiar with the concepts behind testing or test-driven-development but you haven't yet applied them in your daily work this course will transform you into a more confident software engineer by working through several hours of live coding.</p><p>We start with the basics (<code>ember-cli</code>, <code>testem</code>, <code>ember-qunit</code>) and quickly move into writing real software. Each section has both a lecture and hands-on lab to get you comfortable with the idea that testing can be a powerful feedback tool.</p><p>Expert level JS/Ember experience is <em>not</em> required, but because the workshop is only a few hours we won't have enough time to teach the very basics of the language—so make sure you've got that knowledge in advance. In addition, familiarity with <code>ember-cli</code> will be beneficial as each hands-on lab includes writing features and/or fixing bugs with the command line tooling.</p><p><strong>Introduction</strong><br></p><ul><li>What is 'test-driven' and why should you care?</li><li>A quick overview of <code>ember-cli</code> / <code>testem</code></li><li>Unit testing with <code>qunit</code></li><li>Integration testing with <code>ember-qunit</code></li><li>Acceptance testing with ember-testing</li></ul><strong>Outside-In TDD</strong><ul><li>Start acceptance testing the new feature</li><li>Discuss test friction and how to 'listen' for it</li><li>Integration testing the web component in isolation</li><li>Redefine 'unit test' as we decompose the data modeling requirement</li></ul><strong>The Feedback Loop in Action</strong><ul><li>Describe a production bug that has crept into the system</li><li>Deep dive on the thought process as we sift through routes/services/components</li><li>Use advanced techniques like <code>pauseTest()</code> and <code>done()</code> to get feedback in the browser</li></ul><strong>Advanced Techniques</strong><ul><li>Writing a custom async helper for file upload</li><li>What registration and injection look like without the helpers</li><li>How to extend qunit when necessary</li></ul><p>Ticket price of $299, class size limited to 15 students.</p><p></p>\n            ",
        "id": "b:-test-driven-ember"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "E: Intermediate and Advanced Ember Data (New Session)\n              $",
        "speakers": [
          "Igor Terzic",
          "Brendan McLoughlin"
        ],
        "imageUrl": "images/bio-igor-terzic.jpg",
        "time": "–",
        "description": "\n              <p>This class was just added by the instructors due to popular demand. It's a second session of afternoon Training D; scroll down to that entry to find the details.</p>\n            ",
        "id": "e:-intermediate-and-advanced-ember-data-(new-session)"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "C: Building Stateful UI\n              $\n              !",
        "speakers": [
          "Stefan Penner",
          "Mike North"
        ],
        "imageUrl": "images/bio-stef-penner.jpg",
        "time": "1:30–5:00pm",
        "description": "\n              <p>This training will be delivered by Stefan Penner, Ember Core Team member and the creator of <code>ember-cli</code>.</p><p>This workshop is designed for both the intermediate and advanced Ember.js developer. Understanding of core Ember.js concepts is assumed, as we plan to cover more advanced topics.</p><p>As we know, Ember.js aims to enable developers by giving them leverage of an entire ecosystem. This workshop aims to build on that foundation by distilling advanced patterns used in real life ambitious applications into a series of lab like exercises, discussions and lessons.</p><p>In the real world, latency is variable, requests fail, the features are due Tuesday and users still expect a good experience. Attendees should come away from this training enabled, and confident to tackle advanced user interfaces, without succumbing to excess complexity.</p><p>As such, the general theme will revolve around building reliable state-full user interface, while keeping implementations idiomatic, maintainable and most importantly enjoyable.</p><p></p><p><strong>High Level Topics</strong></p><ul><li>TDD/Maintainability</li><li>Ephemeral and Persistent State</li><li>Asynchrony/Latency</li><li>Rich user experiences</li><li>Reliability in the face of failure</li><li>Keeping complexity low and productivity high</li></ul><p><strong>Expectations</strong></p><ul><li>Intermediate to advanced Ember.js knowledge</li><li>Laptop with working installation of <code>ember-cli</code> (latest stable version) and <code>npm</code></li><li>Pair programming encouraged!</li></ul><p>Ticket price of $299, class size limited to 30 students.</p><p></p>\n            ",
        "id": "c:-building-stateful-ui"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "D: Intermediate and Advanced Ember Data\n              $\n              !",
        "speakers": [
          "Igor Terzic",
          "Brendan McLoughlin"
        ],
        "imageUrl": "images/bio-igor-terzic.jpg",
        "time": "–",
        "description": "\n              <p>This training will be delivered by Igor Terzic, an Ember core team member with TA support by Brendan McLoughlin, an Ember Data core team member.</p><p>The training is designed to get Ember developers more comfortable with customizing their Ember Data adapters and serializers and help them handle one off issues they might encounter when dealing with strange APIs in the wild. It will help both developers who need to modify their apps to work with APIs which are not fully JSON API compliant as well as aspiring adapter authors.</p><p>When you finish this training you will be able to quickly get going with Ember Data using your own adapter for custom backend APIs. And even if you still use the <code>JSONAPIAdapter</code>, you will have a better understanding of how it works and will have learned multiple techniques for quickly solving common issues and customizing for the specific quirks of your backend.</p><p>In the first part of this training you will go through a series of exercises which will guide you through writing a basic Ember Data adapter from scratch. This will expose you to the high level adapter APIs and help you understand how the production ready JSON API Adapter works.</p><p>The second part of the training will focus on using the knowledge gained from writing the adapter from the ground up and applying it to customizing the JSON API Adapter. We will show several common techniques for modifying the JSON API Adapter in order to solve complex issues when dealing with APIs which are not fully JSON API compliant.</p><p>This training assumes basic to intermediate knowledge and experience using Ember as well as a familiarity with using Ember Data.</p><p>Ticket price of $299, class size limited to 30. Proceeds of this class will be directed towards funds for conference speakers.</p>\n            ",
        "id": "d:-intermediate-and-advanced-ember-data"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Walking Tours",
        "speakers": [],
        "time": "",
        "description": "\n              \n            ",
        "id": "walking-tours"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Epicurean Extravaganza\n              $\n              !",
        "speakers": [],
        "time": "10:30am–2:00pm",
        "description": "\n              <p>Discover Portland's amazing culinary scene, complete with food and drink tastes along the way. If you watch the Food Network and/or consider yourself a foodie, this is the morning activity for you.</p><p>Portland has become a go-to destination for people who love to eat and our experienced Tour Guide will show you why. You'll sample from the best local artisan items that Oregon has to offer. The tour will visit between 7 and 9 different local vendors and artisan producers in roughly 3.5 hours.</p><p>Ticket price of $79 covers all the snacks and samples along the way, as well as a gratuity for your tour guide. Rain or shine.</p>\n            ",
        "id": "epicurean-extravaganza"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Food Cart Flavor Street\n              $",
        "speakers": [],
        "time": "1:30–3:30pm",
        "description": "\n              <p>Check out Portland’s amazing curbside cuisine! Let our Resident Experts take you on a personal tour of the city’s best food carts, tasting trucks, and hidden kitchens, where former four-star chefs and other culinary entrepreneurs scoop up mighty morsels on an international scale. This isn’t fast food: it’s flavor with flair, for savvy munchers on the go.</p><p><br>With so much to choose from, it’s easy to make a mealtime mistake you’ll regret all week. Our personable, knowledgeable local expert guides will help you navigate the crowds and show you which meals are deals, and which queues to avoid. Along the way they’ll share the story behind the phenomenon that has changed city streets and parking lots into hip places for a posh nosh. You’ll never look at street vendors the same way!</p><p>Ticket price of $79 covers all the snacks and samples along the way, as well as a gratuity for your tour guide. Rain or shine.</p>\n            ",
        "id": "food-cart-flavor-street"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "The Brewer and the Chef\n              $",
        "speakers": [],
        "time": "2:00–8:30pm",
        "description": "\n              <p>Join an intimate group of your fellow Ember friends (14 max, to be specific) for a food/foodie-focused adventure in Northeast Portland. We'll take a guided tour walking to and from three iconic Portland Breweries, complete with snacks and tastings (included). </p><p>After that, we'll walk to a nearby kitchen/private dining room for a fabulous cooking class, where you'll spend time preparing and then eating a fantastic foodie-approved dinner. Who said you can only learn about Ember at EmberConf?</p><p>Ticket price of $199 covers all tours, brewery tasting beer and snacks, cooking instruction and dinner with dessert.</p><p>We promise, it's going to be good! Dinner will be a Moroccan feast, which should finish the day of drinking and snacking nicely. The menu:<br></p><ul><li>Moroccan spice pastry with beef or lamb, cinnamon, raisins and pine nuts</li><li>Parsley Salad</li><li>Tagine of chicken with melting onions, saffron, preserved lemon and green olives over cous cous</li><li>Beet, olive oil and spice cake</li><li>Poached apricots stuffed with mascarpone and pistachio</li><li>and a nice Pinot Noir pairing</li></ul><br>And the three Breweries we'll be visiting are:<ul><li>Ecliptic</li><li>StormBreaker</li><li>Hopworks BikeBar</li></ul><p>The Brewery Tour will be led buy a super fun guide and include tastings at each location, snacks along the way, a tasting journal and a souvenir glass.</p><p>As with all EmberConf activities that involve alcohol, drink responsibly! Don't overdo it: we'll also provide lots of snacks along the way to help make sure you don't. Rain or shine.</p><p></p>\n            ",
        "id": "the-brewer-and-the-chef"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Other Activities",
        "speakers": [],
        "time": "",
        "description": "\n              \n            ",
        "id": "other-activities"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Contributors Workshop\n              $",
        "speakers": [
          "Matthew Beale",
          "Cory Forsyth"
        ],
        "imageUrl": "images/bio-matt-beale.png",
        "time": "10:00am–5:00pm",
        "description": "\n              <p>Ember stands on the shoulders of hundreds of contributors. Some land a small bugfix, and others refactor entire APIs. Some write documentation or improve CI reliability, and yet other help with deployment and automation. All of them started small before making a larger contribution.</p><p>Join us for a loosely structured day of hacker hours and instruction that will include presentations on how to make a PR to Ember, tutorials on how to contribute to documentation, and everything you need to know about how to collaborate on RFCs.</p><p>This Workshop is sponsored by 201 Created, and the $29 registration fee will go toward conference scholarship programs.</p><p>Lunch will be served.</p>\n            ",
        "id": "contributors-workshop"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "WHW Public Speaking 101\n              $\n              !",
        "speakers": [
          "Bear Douglas",
          "Details on the WHW program."
        ],
        "imageUrl": "images/bio-bear-douglas.jpg",
        "time": "9:00am–12:00pm",
        "description": "\n              <p>This Workshop is open to members of the EmberConf <em>Women Helping Women</em> Program.</p><p>This fun workshop is a mix of lecture, exercises, and discussion, focused on practical techniques and principles that can help you level up your skills for speaking to any size of group. Learn how to adapt your body language and content to communicate effectively to dozens, hundreds, or thousands of people—and how to recover when things don’t go as planned.</p><p><a href=\"/women-helping-women.html\">Details on the WHW program.</a></p>\n            ",
        "id": "whw-public-speaking-101"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "WHW Program Luncheon\n              $\n              !",
        "speakers": [
          "DockYard",
          "Fastly",
          "Details on the WHW program."
        ],
        "time": "12:30–2:00pm",
        "description": "\n              <p>This private luncheon is open to members of the EmberConf <em>Women Helping Women</em> Program, and is sponsored by our friends at <a href=\"https://dockyard.com/ember-consulting\">DockYard</a> and <a href=\"http://fastly.us/1OHvuGw\">Fastly</a>.</p><p><a href=\"/women-helping-women.html\">Details on the WHW program.</a></p>\n            ",
        "id": "whw-program-luncheon"
      },
      {
        "day": "Pre-Conf Activities: March 28",
        "title": "Mentorship Program Meet n' Greet",
        "speakers": [],
        "time": "6:00–7:30pm",
        "description": "\n              <p>This private wine-and-cheese mixer is for members of the EmberConf Mentorship Program. Applications to the program opened and closed in early March.</p>\n            ",
        "id": "mentorship-program-meet-n'-greet"
      },
      {
        "day": "Day 1: March 29",
        "title": "Registration",
        "speakers": [],
        "time": "8:30–9:45am",
        "description": "\n              \n            ",
        "id": "registration"
      },
      {
        "day": "Day 1: March 29",
        "title": "Opening Keynote",
        "speakers": [
          "Yehuda Katz",
          "Tom Dale"
        ],
        "imageUrl": "images/bio-yehuda-katz.jpg",
        "time": "9:45am–10:30",
        "description": "\n              <p>Coming soon!</p>\n            ",
        "id": "opening-keynote"
      },
      {
        "day": "Day 1: March 29",
        "title": "Using Service Workers in Ember",
        "speakers": [
          "John Kleinschmidt"
        ],
        "imageUrl": "images/bio-john-kleinschmidt.jpg",
        "time": "10:45–11:15am",
        "description": "\n              <p>Service Workers are now available in browsers but why should we as Ember developers care about them?</p><p>In this talk we will examine some of the common use cases for Service Workers and patterns for implementing them in your Ember applications.</p>\n            ",
        "id": "using-service-workers-in-ember"
      },
      {
        "day": "Day 1: March 29",
        "title": "Cross-Pollinating Communities: We All Win",
        "speakers": [
          "Chris Ball"
        ],
        "imageUrl": "images/bio-chris-ball.jpeg",
        "time": "11:30am–12:00pm",
        "description": "\n              <p>You may have heard the quote, \"Good artists copy, great artists steal.\"</p><p>Ember's origins were inspired by Cocoa. Ember has taken many cues from Rails, the biggest coming in the form of strong framework conventions. In 1.13, Ember's rendering engine was rewritten based on concepts pioneered by React. Instead of writing their own cli from the ground up, Angular has embraced <code>ember-cli</code>.</p><p>Let's examine past and future benefits of sharing ideas, and what it means for our favorite framework and our industry as a whole.</p>\n            ",
        "id": "cross-pollinating-communities:-we-all-win"
      },
      {
        "day": "Day 1: March 29",
        "title": "Lunch",
        "speakers": [],
        "time": "12:00–1:30pm",
        "description": "\n              \n            ",
        "id": "lunch"
      },
      {
        "day": "Day 1: March 29",
        "title": "<select>ing Good Ember Patterns",
        "speakers": [
          "Brenna O'Brien"
        ],
        "imageUrl": "images/bio-brenna-obrien.jpg",
        "time": "1:30–2:00pm",
        "description": "\n              <p>What's in an Ember &lt;select&gt; element? For a long time, the answer was two-way data binding, observers, and an obscured DOM, along with the challenges and bugs that went with it.</p><p>Today, we can move beyond the <code>{{view “select”}}</code> helper and render this common UI element using native DOM and one-way data flow. Through the lens of the select element, both as standalone code and a re-usable component, we’ll learn how and why to use good Ember patterns like data-down, actions up (DDAU), plus some handy new Ember features like closure actions and the <code>mut</code> and <code>{{get}}</code> helpers.</p>\n            ",
        "id": "<select>ing-good-ember-patterns"
      },
      {
        "day": "Day 1: March 29",
        "title": "An Illustrated Guide to Ember",
        "speakers": [
          "Brigitte Warner"
        ],
        "imageUrl": "images/bio-brigitte-warner.jpg",
        "time": "–",
        "description": "\n              <p>We'll approach Ember as an illustrated fairy tale: drawing upon the power of story telling to describe the creation of an Ember application through its inciting incident, caste of characters (object model), and the conflicts that arise and how our heroine overcomes them through wit and cleverness.</p>\n            ",
        "id": "an-illustrated-guide-to-ember"
      },
      {
        "day": "Day 1: March 29",
        "title": "Building Desktop Apps with Ember and Electron",
        "speakers": [
          "Felix Rieseberg"
        ],
        "imageUrl": "images/bio-felix-rieseberg.png",
        "time": "2:15–2:45pm",
        "description": "\n              <p>You may have seen apps like Slack, Visual Studio Code, or Docker's Kitematic: desktop applications written using Node.js and Chromium. You might be hoping to build something similar.</p><p>Electron was originally built for the Atom editor, and enables developers to build beautiful cross-platform apps using the JavaScript we all love. When combined with Ember, you're looking at a fantastic desktop app development framework.</p><p>Ember and Electron are a match made in heaven, and this talk will teach you all you need to know to get started building desktop apps with Ember.</p>\n            ",
        "id": "building-desktop-apps-with-ember-and-electron"
      },
      {
        "day": "Day 1: March 29",
        "title": "How I Learned to Love Ember",
        "speakers": [
          "Ju Liu"
        ],
        "imageUrl": "images/bio-ju-liu.jpg",
        "time": "–",
        "description": "\n              <p>\"I’ve always been a backend guy. I love Ruby. Keep things simple. Oh no, not another JavaScript framework...\"</p><p>This was me a year ago. Now I don't feel like this anymore. Matter of fact, the other day I caught myself saying:</p><p>\"I can do everything in Ember!\"</p><p>In this talk, I will narrate the journey that turned a hardened Ruby Engineer into an Ember enthusiast. I will recount how I escaped from the \"New to Ember\" pits of despair, how I fought in the \"Upgrade Wars\" and ultimately how it changed my mind about all software development.</p><p>As I learned Ember, I learned to love Ember.</p>\n            ",
        "id": "how-i-learned-to-love-ember"
      },
      {
        "day": "Day 1: March 29",
        "title": "Building Mobile Applications with Ember",
        "speakers": [
          "Alex Blom"
        ],
        "imageUrl": "images/bio-alex-blom.jpeg",
        "time": "3:00–3:30pm",
        "description": "\n              <p>It is possible to create performant mobile applications with Ember and Cordova, and to achieve this with your existing Ember application. But most peoples first hybrid experience is seeing serious performance issues and stop (\"It doesn’t feel native\").</p><p>This talk will serve beginner and intermediate Ember developers looking to extend their application to mobile. It will touch on both the best tools in the Ember ecosystem, and best practices for optimization and performance.</p>\n            ",
        "id": "building-mobile-applications-with-ember"
      },
      {
        "day": "Day 1: March 29",
        "title": "Living Style Guide Driven Development",
        "speakers": [
          "Chris LoPresto"
        ],
        "imageUrl": "images/bio-chris-lopresto.jpg",
        "time": "–",
        "description": "\n              <p>Creating a living design system is essential to developing a cohesive experience for users over the lifetime of a product. Ember tooling and conventions make this easier than you might expect.</p><p>By organizing your application functionality into Ember components, you can easily build a living style guide to showcase key features, design patterns, and user interactions. This fashion of style guide driven development enables a rapid implementation and feedback cycle, a comprehensive overview of key features, and the blissful feeling of providing order in a chaotic world.</p>\n            ",
        "id": "living-style-guide-driven-development"
      },
      {
        "day": "Day 1: March 29",
        "title": "Snack Break",
        "speakers": [],
        "time": "3:30–4:00pm",
        "description": "\n              \n            ",
        "id": "snack-break"
      },
      {
        "day": "Day 1: March 29",
        "title": "Warp Speed Memory Management",
        "speakers": [
          "Kelly Senna"
        ],
        "imageUrl": "images/bio-kelly-senna.png",
        "time": "4:00–4:30pm",
        "description": "\n              <p>In low level languages, primitives exist for memory management. Despite the C-like syntax, JavaScript is garbage collected, causing many front end developers to feel it does a great job of memory management for us. But how does it actually work and does it work how we think it does?</p><p>This session will discuss memory management in JavaScript (compared to other languages) and what is really going on behind your browser. Using an Ember.js application, we will also discuss best practices to optimize our code, how JavaScript and Ember optimizes for us, and ways we can address common pain points.</p>\n            ",
        "id": "warp-speed-memory-management"
      },
      {
        "day": "Day 1: March 29",
        "title": "Debugging Ember With Empathy",
        "speakers": [
          "Vaidehi Joshi"
        ],
        "imageUrl": "images/bio-vaidehi-joshi.png",
        "time": "–",
        "description": "\n              <p>Denial, anger, bargaining, depression, acceptance. But I don't mean the five stages of grief—I'm talking about the five stages of debugging your first Ember app!</p><p>Learning how to navigate the building blocks of Ember can be difficult, but the even trickier thing is knowing where to start debugging while you're still learning the framework. One approach that I use is to put myself into my code's shoes.</p><p>In this talk, we'll connect with our objects to understand what's going on under the hood. Let's jump over some common first-time Ember hurdles together by debugging our code — with empathy.</p>\n            ",
        "id": "debugging-ember-with-empathy"
      },
      {
        "day": "Day 1: March 29",
        "title": "Dissecting an Ember CLI Build",
        "speakers": [
          "Estelle DeBlois"
        ],
        "imageUrl": "images/bio-estelle-deblois.jpg",
        "time": "4:45–5:15pm",
        "description": "\n              <p>As the tooling ecosystem continues to evolve, developers nowadays can easily scaffold out a new Ember app and start being productive right away, without ever thinking of all the intricacies that go on behind a typical build command. But there comes a time when manipulating trees or nodes in Broccoli may be required to support a custom project architecture, or you may find yourself having to extend the build for specialized environments through addons.</p><p>Whether you face any one of those scenarios, or you simply want to know more of what goes on behind the curtain, this talk is for you.</p>\n            ",
        "id": "dissecting-an-ember-cli-build"
      },
      {
        "day": "Day 1: March 29",
        "title": "Ember at Scale",
        "speakers": [
          "Chad Hietala"
        ],
        "imageUrl": "images/bio-chad-hietala.jpg",
        "time": "–",
        "description": "\n              <p>Ember has primarily been known for allowing small teams extremely productive to ship ambitious applications to the web, what does this look like when you scale it out to hundreds of engineers and for a web property that has over 400 million users?</p><p>In this talk I will show how we shipped our first Ember application and how we addressed everything from tooling to performance.</p>\n            ",
        "id": "ember-at-scale"
      },
      {
        "day": "Day 1: March 29",
        "title": "You're Building a Distributed System!",
        "speakers": [
          "Mike Pack"
        ],
        "imageUrl": "images/bio-mike-pack.jpg",
        "time": "5:30–6:00pm",
        "description": "\n              <p>Whether you know it or not, you're building a distributed system. This becomes painfully obvious when taking Ember apps into the developing world. Flaky network connections pose real challenges for developers building stateful applications in the browser.</p><p>This talk is about my trials and tribulations taking Ember offline in Africa. We’ll look at the tools necessary to venture offline, how they apply to Ember specifically, and a little bit of theory to drive home the hard facts about how much fun you’ll have building a distributed system!</p>\n            ",
        "id": "you're-building-a-distributed-system!"
      },
      {
        "day": "Day 1: March 29",
        "title": "The Tale of Two Teams",
        "speakers": [
          "Ray Tiley"
        ],
        "imageUrl": "images/bio-ray-tiley.jpg",
        "time": "–",
        "description": "\n              <p>So lets talk about two teams, both with old, messy, outdated code bases. One team chooses a framework, refactors behind the scenes, ships new features and one day have a shiny, modern code base.</p><p>The other rewrites it all, from scratch, with sprinkles of JavaScript. How did these two teams fare? In this talk we'll find out. Spoiler alert... both teams are happily using Ember today.</p>\n            ",
        "id": "the-tale-of-two-teams"
      },
      {
        "day": "Day 1: March 29",
        "title": "Happy Hour",
        "speakers": [],
        "time": "6:00–7:00pm",
        "description": "\n              \n            ",
        "id": "happy-hour"
      },
      {
        "day": "Day 2: March 30",
        "title": "Early-Risers Fitness Bootcamp\n              $",
        "speakers": [],
        "time": "7:00–8:00am",
        "description": "\n              <p>You're out of town, but your fitness routine need not suffer, right? We've got a trainer in from one of Portland's favorite fitness bootcamp instructors, ready to get everyone worked up and ready for the day. Class will be located at the DoubleTree.</p><p>Registration will be separate from EmberConf registration, and will open closer to the conference date.</p>\n            ",
        "id": "early-risers-fitness-bootcamp"
      },
      {
        "day": "Day 2: March 30",
        "title": "Registration",
        "speakers": [],
        "time": "8:30–10:00am",
        "description": "\n              \n            ",
        "id": "registration"
      },
      {
        "day": "Day 2: March 30",
        "title": "Ember CLI, The Next Generation",
        "speakers": [
          "Stefan Penner"
        ],
        "imageUrl": "images/bio-stef-penner.jpg",
        "time": "10:00am–10:30",
        "description": "\n              <p>Coming soon!</p>\n            ",
        "id": "ember-cli,-the-next-generation"
      },
      {
        "day": "Day 2: March 30",
        "title": "Building a Game in Ember Starring Your Cat",
        "speakers": [
          "Matt McKenna"
        ],
        "imageUrl": "images/bio-matt-mckenna.png",
        "time": "–",
        "description": "\n              <p>Ember is generally used to build ambitious web applications, but what about ambitious web games starring your cat? In this talk, I'll go over how to use Ember to build, organize, and deploy HTML5-<code>canvas</code> based games.</p><p>Using Ember to develop games shares the same benefits of using Ember to develop applications—both the toolchain and the conventions alleviate decision fatigue. For example, route-driven paths are great at handling levels, Liquid Fire provides lovely transitions for menus, and adapters provide a standard way to connect to backends for saving high scores.</p>\n            ",
        "id": "building-a-game-in-ember-starring-your-cat"
      },
      {
        "day": "Day 2: March 30",
        "title": "Compose Yourself with Ember and D3",
        "speakers": [
          "Ivan Vanderbyl"
        ],
        "imageUrl": "images/bio-ivan-vanderbyl.jpg",
        "time": "10:45–11:15am",
        "description": "\n              <p>Say you're building a chart, what's the most natural representation for specifying a visualization? A configurable chart component? Abstract components which can be used together to create something larger? Or low level primitives which can give you fine grained control over your presentation?</p><p>In this talk I will introduce D3 Shape, and demonstrate how you can compose reusable Components which solve all of the above requirements for quickly visualizing information in Ember.</p>\n            ",
        "id": "compose-yourself-with-ember-and-d3"
      },
      {
        "day": "Day 2: March 30",
        "title": "Easy-Bake Testing",
        "speakers": [
          "Liz Baillie"
        ],
        "imageUrl": "images/bio-liz-baillie.jpg",
        "time": "–",
        "description": "\n              <p>Mocha? Chai? Qunit? Jasmine? What's the difference? Which one is best for me? How do I use these new integration tests? What are mocks and stubs and how should I use them?</p><p>With so many different testing frameworks, libraries, and addons, and so many different styles and approaches to testing your Ember apps, it can be daunting to get started building a test suite to meet your needs.</p><p>Don't be scared! I'm here with my nonthreatening lightbulb-powered Easy-Bake testing guide to help you out!</p>\n            ",
        "id": "easy-bake-testing"
      },
      {
        "day": "Day 2: March 30",
        "title": "Idiomatic Ember: Sweet Spot of Performance and Productivity",
        "speakers": [
          "Lauren Elizabeth Tan"
        ],
        "imageUrl": "images/bio-lauren-tan.jpg",
        "time": "11:30am–12:00pm",
        "description": "\n              <p>With the release of Ember 2.0, many best practices established in the 1.x series are unfortunately no longer relevant. Lessons learnt from the React and Flux communities can help guide the path toward The Ember Way, with \"Data Down, Actions Up\" being one of the core philosophies.</p><p>In this beginner-friendly talk, we'll discuss patterns and anti-patterns for bringing Ember applications into the 2.x paradigm, and discover how ideas from Functional Programming and game rendering engines can inform us. We will also look at the roads ahead to see what future versions of Ember will bring.</p>\n            ",
        "id": "idiomatic-ember:-sweet-spot-of-performance-and-productivity"
      },
      {
        "day": "Day 2: March 30",
        "title": "The Ember Addon Community",
        "speakers": [
          "Katie Gengler"
        ],
        "imageUrl": "images/bio-katie-gengler.jpg",
        "time": "–",
        "description": "\n              <p>For nearly two years now, new Ember addons have been published daily. The availability of quality addons has grown to be a crucial part of the Ember experience. </p><p>Let’s talk about how addon developers, Ember contributors, and end-users have contributed to this ecosystem, and how we can each do our part to make Ember’s addon community even better.</p>\n            ",
        "id": "the-ember-addon-community"
      },
      {
        "day": "Day 2: March 30",
        "title": "Lunch",
        "speakers": [],
        "time": "12:00–1:30pm",
        "description": "\n              \n            ",
        "id": "lunch"
      },
      {
        "day": "Day 2: March 30",
        "title": "Immutability is for UI, You, and I",
        "speakers": [
          "Charles Lowell"
        ],
        "imageUrl": "images/bio-charles-lowell.jpg",
        "time": "1:30–2:00pm",
        "description": "\n              <p><em>Immutability</em>. It may sound like an ominous something from the far-off galaxy of math, but in practice, it's one of the most pragmatic tools for thinking about UI.</p><p>In this talk we'll explore the problems that an immutable style solves, and how you can use it as a thought-tool to both design and implement more powerful and composable components.</p><p>Throughout we'll see just how deeply Ember supports this mode of thought at every step of the way.</p>\n            ",
        "id": "immutability-is-for-ui,-you,-and-i"
      },
      {
        "day": "Day 2: March 30",
        "title": "Migrating an Existing App to Ember, Component After Component",
        "speakers": [
          "Xavier Cambar"
        ],
        "imageUrl": "images/bio-xavier-cambar.jpeg",
        "time": "–",
        "description": "\n              <p>While Ember is designed for building ambitious applications, the documentation and public resources mostly focus on new applications, making lots of things simpler to write from scratch.</p><p>This talk will share my experience migrating an existing application to Ember part after part. I'll share tips for how to avoid the unpopular \"Big Bang rewrite\" (minimizing the costs of adoption), and discuss the integration story and loose coupling of Ember.</p>\n            ",
        "id": "migrating-an-existing-app-to-ember,-component-after-component"
      },
      {
        "day": "Day 2: March 30",
        "title": "How to Build a Compiler",
        "speakers": [
          "James Kyle"
        ],
        "imageUrl": "images/bio-james-kyle.jpg",
        "time": "2:15–2:45pm",
        "description": "\n              <p>Compilers are all around you: Babel, Handlebars/HTMLBars, Glimmer, Uglify, and more. In this talk we'll walk through every part of a compiler from the parser to the generator. Learn about visitors and traversal, paths, scopes, bindings, and everything else. By the end compilers shouldn't seem like magic, and maybe you'll even want to contribute back to them.</p>\n            ",
        "id": "how-to-build-a-compiler"
      },
      {
        "day": "Day 2: March 30",
        "title": "The Great Migration: Redesigning and Rewriting our App in Ember.js",
        "speakers": [
          "Jade Applegate"
        ],
        "imageUrl": "images/bio-jade-applegate.jpg",
        "time": "–",
        "description": "\n              <p>Many Embereños use the framework for their side projects, but have not yet had the opportunity to work on an Ember project in their professional lives. This talk will cover one team’s journey migrating a legacy codebase to Ember.js.</p><p>Key topics will include the redesign and rewrite of a highly complex and detailed customer-facing user dashboard, challenges faced when porting an application to Ember, and the results of the migration project in terms of improved application speed, security, and overall performance.</p>\n            ",
        "id": "the-great-migration:-redesigning-and-rewriting-our-app-in-ember.js"
      },
      {
        "day": "Day 2: March 30",
        "title": "The Future of Ember Templating",
        "speakers": [
          "Godfrey Chan",
          "Yehuda Katz"
        ],
        "imageUrl": "images/bio-godfrey-chan.png",
        "time": "3:00–3:30pm",
        "description": "\n              <p>This talk is a technical deep dive into the implementation of Glimmer 2, and what it will enable going forward.</p><p>It will cover the basic architecture of Glimmer 2, how it integrates with Ember, and how it fits in with FastBoot, Progressive Web Apps, and Off Main Thread rendering.</p>\n            ",
        "id": "the-future-of-ember-templating"
      },
      {
        "day": "Day 2: March 30",
        "title": "Interoperable Component Patterns",
        "speakers": [
          "Matthew Beale"
        ],
        "imageUrl": "images/bio-matt-beale.png",
        "time": "–",
        "description": "\n              <p>Though component and custom element patterns have become the standard for web application architecture, communicating from one solution to another remains fogged by guesswork and opinion.</p><p>How should you write a web component that needs to be compatible with Ember and other frameworks? Where are the tradeoffs between purity of design and ergonomics? In a talk touching on libraries and standards, come learn how to write component code useful across many environments.</p>\n            ",
        "id": "interoperable-component-patterns"
      },
      {
        "day": "Day 2: March 30",
        "title": "Snack Break",
        "speakers": [],
        "time": "3:30–4:00pm",
        "description": "\n              \n            ",
        "id": "snack-break"
      },
      {
        "day": "Day 2: March 30",
        "title": "EmberConf MiniTalks",
        "speakers": [
          "Leah Silber"
        ],
        "imageUrl": "images/bio-leah-silber.jpg",
        "time": "4:00–4:30pm",
        "description": "\n              <p>Think lightning talks, but better curated and better prepared. We've selected a handful of really great topics that are critical to get before the EmberConf audience, but not necessarily needing a full 30 minutes.</p>\n            ",
        "id": "ember-conf-mini-talks"
      },
      {
        "day": "Day 2: March 30",
        "title": "Ember Between Design and Development",
        "speakers": [
          "Lisa Gringl",
          "Francesco Novy"
        ],
        "imageUrl": "images/bio-lisa-gringl.png",
        "time": "4:45–5:15pm",
        "description": "\n              <p>The bigger a project gets, the more important communication and consistency across the whole team becomes. In order to achieve this, it is critical to establish an integrated workflow with all team members. In this talk, a designer and a developer who worked together on various Ember projects will present an effective way of handling these challenges.</p><p>Three levels of documentation will be presented: A living styleguide for designers, a component guide for designers &amp; developers and a JavaScript documentation for developers.</p>\n            ",
        "id": "ember-between-design-and-development"
      },
      {
        "day": "Day 2: March 30",
        "title": "Closing Keynote: Reversing the River",
        "speakers": [
          "Oren Teich"
        ],
        "imageUrl": "images/bio-oren-teich.jpg",
        "time": "5:30–6:00pm",
        "description": "\n              <p>There have been some amazing, audacious public projects. Chicago in the second half of the 19th century is up there at the top. There are a ton of lessons to be learned from 163 year old public works projects in building software today.</p>\n            ",
        "id": "closing-keynote:-reversing-the-river"
      }
    ];
    let grouped = [{
      id: 'pre-conf-activities',
      name: "Pre-Conf Activities: March 28",
      talks: []
    }, {
      id: 'day-1',
      name: "Day 1: March 29",
      talks: []
    }, {
      id: 'day-2',
      name: "Day 2: March 30",
      talks: []
    }];
    for (var i = 0, l = json.length; i < l; i++) {
      let talk = json[i];
      talk.id = talk.title.split('\n')[0].dasherize().toLowerCase();
      grouped.findBy('name', talk.day).talks.push(talk);
    }
    return grouped.splice(1);
  }
});
