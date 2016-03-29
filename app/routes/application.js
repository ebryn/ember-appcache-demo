import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let json = [
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
      id: '1',
      name: "Day 1: March 29",
      talks: []
    }, {
      id: '2',
      name: "Day 2: March 30",
      talks: []
    }];
    for (var i = 0, l = json.length; i < l; i++) {
      let talk = json[i];
      talk.id = talk.title.split('\n')[0].dasherize().toLowerCase();
      grouped.findBy('name', talk.day).talks.push(talk);
    }
    return grouped;
  }
});
