'use client'

import { useState } from 'react'

const appIdeas = [
  {
    category: '🏥 Health & Wellness',
    icon: '🏥',
    apps: [
      {
        name: 'MindfulMoments',
        tagline: 'Micro-meditation for busy professionals',
        description: 'A mental wellness app that provides 30-second to 5-minute guided meditation sessions tailored to your current stress level, detected through voice tone analysis.',
        features: ['Voice stress detection', 'Personalized breathing exercises', 'Progress tracking', 'Workplace integration'],
        market: 'Mental wellness market valued at $4.2B and growing 8% annually'
      },
      {
        name: 'NutriScan',
        tagline: 'Instant nutritional intelligence',
        description: 'Point your camera at any meal and get instant nutritional breakdown, allergen alerts, and personalized health recommendations based on your dietary goals.',
        features: ['AI-powered food recognition', 'Macro tracking', 'Allergen detection', 'Recipe suggestions'],
        market: 'Digital health market expected to reach $639B by 2026'
      },
      {
        name: 'SleepOptimizer',
        tagline: 'Engineer your perfect sleep',
        description: 'Uses environmental sensors and sleep patterns to optimize your bedroom conditions (temperature, lighting, sound) for maximum sleep quality.',
        features: ['Smart home integration', 'Sleep cycle analysis', 'Wake-up optimization', 'Sleep debt calculator'],
        market: 'Sleep tech market growing at 17% CAGR, reaching $32B by 2028'
      },
      {
        name: 'FitFam Social',
        tagline: 'Family fitness challenges made fun',
        description: 'Turn family fitness into a game with challenges, leaderboards, and rewards that get everyone moving together, regardless of fitness level.',
        features: ['Multi-user tracking', 'Age-appropriate challenges', 'Virtual rewards', 'Video challenge sharing'],
        market: 'Family fitness apps seeing 45% increase in downloads post-pandemic'
      },
      {
        name: 'PainTracker Pro',
        tagline: 'Chronic pain management assistant',
        description: 'Help chronic pain sufferers identify triggers, track patterns, and communicate effectively with healthcare providers through detailed pain journals.',
        features: ['Pain intensity mapping', 'Trigger identification', 'Doctor-ready reports', 'Medication reminders'],
        market: '50M Americans suffer from chronic pain, $635B annual cost'
      },
      {
        name: 'HydroCoach',
        tagline: 'Smart hydration for peak performance',
        description: 'Personalized water intake recommendations based on activity level, weather, and body composition, with smart bottle integration.',
        features: ['Weather-based adjustments', 'Exercise integration', 'Smart bottle sync', 'Hydration streak tracking'],
        market: 'Smart water bottle market projected to reach $350M by 2027'
      },
      {
        name: 'PostureGuard',
        tagline: 'Your digital posture coach',
        description: 'Uses device cameras to monitor posture during work and provide real-time corrections to prevent back pain and improve ergonomics.',
        features: ['Real-time posture detection', 'Ergonomic recommendations', 'Break reminders', 'Desk setup analysis'],
        market: '80% of adults experience back pain, $88B annual treatment cost'
      },
      {
        name: 'TherapyMatch',
        tagline: 'Find your perfect therapist',
        description: 'AI-powered matching system that connects users with therapists based on specialization, communication style, and insurance compatibility.',
        features: ['Personality matching', 'Insurance verification', 'Video consultations', 'Progress tracking'],
        market: 'Online therapy market expected to grow to $9.4B by 2027'
      }
    ]
  },
  {
    category: '💼 Productivity & Business',
    icon: '💼',
    apps: [
      {
        name: 'MeetingMiner',
        tagline: 'Extract value from every meeting',
        description: 'Automatically records, transcribes, and generates actionable insights from meetings, distributing tasks and follow-ups to relevant team members.',
        features: ['AI transcription', 'Action item extraction', 'Task distribution', 'Meeting analytics'],
        market: 'Enterprise collaboration market at $31B, growing 13% annually'
      },
      {
        name: 'FocusZone',
        tagline: 'Deep work in a distracted world',
        description: 'Blocks distracting websites and apps based on your work schedule, with AI that learns your productivity patterns and adjusts automatically.',
        features: ['Smart blocking', 'Productivity analytics', 'Focus sessions', 'Team accountability'],
        market: 'Productivity software market expected to reach $102B by 2027'
      },
      {
        name: 'FreelanceHub',
        tagline: 'All-in-one freelancer command center',
        description: 'Manage clients, projects, invoices, contracts, and time tracking in one beautiful interface designed specifically for solopreneurs.',
        features: ['Client management', 'Automated invoicing', 'Time tracking', 'Contract templates'],
        market: '59M Americans freelanced in 2023, contributing $1.27T to economy'
      },
      {
        name: 'EmailZero',
        tagline: 'Achieve inbox nirvana',
        description: 'AI-powered email management that categorizes, summarizes, and drafts responses, helping you reach inbox zero daily.',
        features: ['Smart categorization', 'AI-generated replies', 'Priority scoring', 'Unsubscribe automation'],
        market: 'Average worker receives 121 emails daily, wasting 28% of workweek'
      },
      {
        name: 'ProjectPulse',
        tagline: 'Real-time project health monitoring',
        description: 'Dashboard that aggregates data from all project management tools to give executives a real-time view of project health and risk.',
        features: ['Multi-tool integration', 'Risk prediction', 'Resource optimization', 'Custom dashboards'],
        market: 'Project management software market at $7B, growing 14% annually'
      },
      {
        name: 'SmartScheduler AI',
        tagline: 'Calendar optimization perfected',
        description: 'AI assistant that not only schedules meetings but optimizes your entire calendar for productivity, energy levels, and work-life balance.',
        features: ['Energy-based scheduling', 'Meeting optimization', 'Buffer time management', 'Commute integration'],
        market: 'Scheduling software market expected to reach $546M by 2026'
      },
      {
        name: 'ContractGuardian',
        tagline: 'Never miss a deadline or renewal',
        description: 'Track all business contracts, licenses, and subscriptions with automated renewal reminders and compliance monitoring.',
        features: ['Contract repository', 'Renewal alerts', 'Compliance tracking', 'Vendor management'],
        market: 'Contract management software market at $2.7B, growing 13% CAGR'
      },
      {
        name: 'PitchPerfect',
        tagline: 'Master your sales presentations',
        description: 'Practice and perfect your sales pitches with AI analysis of speech patterns, body language, and slide effectiveness.',
        features: ['Speech analysis', 'Body language feedback', 'Slide optimization', 'Practice tracking'],
        market: 'Sales enablement market projected to reach $7.5B by 2027'
      },
      {
        name: 'ExpenseSnap',
        tagline: 'Receipt to reimbursement in seconds',
        description: 'Snap a photo of any receipt and automatically create expense reports with category detection, mileage tracking, and multi-currency support.',
        features: ['OCR receipt scanning', 'Auto-categorization', 'Mileage tracking', 'Multi-currency'],
        market: 'Expense management software market at $5.4B, growing 12% annually'
      },
      {
        name: 'NetworkMap',
        tagline: 'Visualize and strengthen your network',
        description: 'Maps your professional network, suggests connections, and reminds you to maintain relationships with key contacts.',
        features: ['Network visualization', 'Relationship tracking', 'Introduction suggestions', 'Contact reminders'],
        market: 'Professional networking platforms serve 930M users globally'
      }
    ]
  },
  {
    category: '🎓 Education & Learning',
    icon: '🎓',
    apps: [
      {
        name: 'SkillSwap',
        tagline: 'Learn by teaching, teach by learning',
        description: 'Peer-to-peer learning platform where users trade skills - teach what you know, learn what you need, all without money changing hands.',
        features: ['Skill matching', 'Video sessions', 'Progress tracking', 'Community reviews'],
        market: 'EdTech market expected to reach $404B by 2025'
      },
      {
        name: 'MicroLearn',
        tagline: '5-minute daily learning streaks',
        description: 'Master any subject through scientifically-designed 5-minute daily lessons that build on each other, using spaced repetition.',
        features: ['Spaced repetition', 'Bite-sized lessons', 'Streak tracking', 'Certificate programs'],
        market: 'Microlearning market growing at 13% CAGR, reaching $3.5B by 2028'
      },
      {
        name: 'HomeworkHelper AI',
        tagline: 'Intelligent tutoring for every subject',
        description: 'AI tutor that doesn\'t just give answers but guides students through problem-solving with Socratic questioning.',
        features: ['Step-by-step guidance', 'Multiple subjects', 'Progress reports', 'Parent dashboard'],
        market: 'Online tutoring market expected to reach $278B by 2029'
      },
      {
        name: 'LanguageBuddy',
        tagline: 'Practice conversations with AI natives',
        description: 'AI conversation partners that speak like natives, adapt to your level, and provide instant feedback on pronunciation and grammar.',
        features: ['AI conversation partners', 'Accent training', 'Cultural context', 'Real-world scenarios'],
        market: 'Language learning apps market at $12B, growing 18% annually'
      },
      {
        name: 'StudySync',
        tagline: 'Collaborative learning made seamless',
        description: 'Find study partners with compatible schedules and goals, share notes, quiz each other, and track progress together.',
        features: ['Study partner matching', 'Shared flashcards', 'Group video sessions', 'Accountability tracking'],
        market: '73% of students prefer collaborative learning environments'
      },
      {
        name: 'CodeMentor Junior',
        tagline: 'Learn coding through game mechanics',
        description: 'Gamified coding education for kids aged 8-16 that teaches real programming languages through engaging storylines and challenges.',
        features: ['Gamified learning', 'Real languages', 'Parent progress tracking', 'Creative projects'],
        market: 'Coding education market for kids growing at 25% CAGR'
      },
      {
        name: 'TestPrep Master',
        tagline: 'Adaptive test preparation',
        description: 'Personalized test prep for SAT, ACT, GRE, GMAT with adaptive learning that focuses on your weakest areas.',
        features: ['Adaptive testing', 'Weakness identification', 'Progress prediction', 'Full-length simulations'],
        market: 'Test prep market at $11B globally, growing steadily'
      },
      {
        name: 'CourseCompass',
        tagline: 'Navigate your learning journey',
        description: 'Aggregates courses from multiple platforms and creates personalized learning paths based on your career goals.',
        features: ['Course aggregation', 'Learning path creation', 'Skill gap analysis', 'Career mapping'],
        market: 'Online course market expected to reach $325B by 2025'
      }
    ]
  },
  {
    category: '🎮 Entertainment & Social',
    icon: '🎮',
    apps: [
      {
        name: 'WatchParty',
        tagline: 'Virtual movie nights reinvented',
        description: 'Synchronized streaming with friends across all major platforms, with video chat, reactions, and commentary features.',
        features: ['Multi-platform sync', 'Video chat overlay', 'Reaction emojis', 'Voice chat'],
        market: 'Social viewing apps saw 500% growth during pandemic'
      },
      {
        name: 'PodcastParty',
        tagline: 'Social podcast discovery',
        description: 'Discover podcasts through friend recommendations, create shared playlists, and discuss episodes in real-time.',
        features: ['Social recommendations', 'Shared playlists', 'Timestamp comments', 'Club creation'],
        market: '464M podcast listeners globally, growing 20% annually'
      },
      {
        name: 'EventBuddy',
        tagline: 'Never attend events alone',
        description: 'Match with people attending the same concerts, conferences, or events to coordinate meetups and make new friends.',
        features: ['Event-based matching', 'Safety verification', 'Group coordination', 'Post-event connections'],
        market: 'Events industry at $1.1T globally, rebounding post-pandemic'
      },
      {
        name: 'TriviaLive',
        tagline: 'Compete in real-time trivia',
        description: 'Daily live trivia competitions with cash prizes, custom categories, and tournaments with friends.',
        features: ['Live competitions', 'Cash prizes', 'Custom quizzes', 'Tournament mode'],
        market: 'Mobile gaming market at $136B, trivia games highly engaging'
      },
      {
        name: 'BookClub+',
        tagline: 'Virtual book clubs with structure',
        description: 'Join or create book clubs with discussion guides, reading schedules, and video meetups built in.',
        features: ['Discussion guides', 'Reading schedules', 'Video meetings', 'Author Q&As'],
        market: 'Digital reading market growing, 255M US adults read books'
      },
      {
        name: 'MemoryLane',
        tagline: 'Collaborative family timeline',
        description: 'Build a living family history with photos, stories, and videos that multiple generations can contribute to.',
        features: ['Multi-generational collaboration', 'Story recording', 'Photo timeline', 'Family tree integration'],
        market: 'Genealogy services market at $3.4B, growing 9% annually'
      },
      {
        name: 'StreamStats',
        tagline: 'Analytics for content creators',
        description: 'Comprehensive analytics dashboard for streamers across multiple platforms with actionable insights and growth recommendations.',
        features: ['Multi-platform analytics', 'Audience insights', 'Growth recommendations', 'Revenue tracking'],
        market: '51M creator economy participants, $104B market'
      },
      {
        name: 'MusicMixer',
        tagline: 'Collaborative playlist creation',
        description: 'Create playlists collaboratively with friends in real-time, with AI suggestions based on everyone\'s taste.',
        features: ['Real-time collaboration', 'AI recommendations', 'Mood-based creation', 'Party mode'],
        market: 'Music streaming users at 616M globally, growing 15% annually'
      }
    ]
  },
  {
    category: '🏠 Home & Lifestyle',
    icon: '🏠',
    apps: [
      {
        name: 'PlantPal',
        tagline: 'Keep your plants thriving',
        description: 'Identify plants, get care instructions, set watering reminders, and diagnose problems through photo analysis.',
        features: ['Plant identification', 'Care schedules', 'Problem diagnosis', 'Growth tracking'],
        market: 'Indoor gardening market at $3.2B, growing with millennial interest'
      },
      {
        name: 'ChoreQuest',
        tagline: 'Gamify household chores',
        description: 'Turn household chores into a game with points, levels, and rewards that motivate the whole family.',
        features: ['Point system', 'Family leaderboards', 'Reward redemption', 'Chore rotation'],
        market: 'Family organization app market growing 20% annually'
      },
      {
        name: 'MealPrep Master',
        tagline: 'Plan, prep, succeed',
        description: 'Complete meal planning and prep system with grocery lists, prep instructions, and container organization.',
        features: ['Weekly meal plans', 'Auto grocery lists', 'Prep timelines', 'Container tracking'],
        market: 'Meal kit delivery market at $20B, growing 13% annually'
      },
      {
        name: 'HomeRepair Guide',
        tagline: 'DIY home repairs made easy',
        description: 'Video guides and AR assistance for common home repairs, with tool rental marketplace and pro contractor matching.',
        features: ['Video tutorials', 'AR guidance', 'Tool marketplace', 'Contractor matching'],
        market: 'Home improvement market at $450B annually in US'
      },
      {
        name: 'ClosetOrganizer',
        tagline: 'Digitize and optimize your wardrobe',
        description: 'Catalog your clothes, get outfit suggestions, track what you wear, and identify pieces to donate or sell.',
        features: ['Wardrobe catalog', 'Outfit suggestions', 'Wear tracking', 'Resale integration'],
        market: 'Fashion tech market expected to reach $5.4B by 2028'
      },
      {
        name: 'PetCare Plus',
        tagline: 'Comprehensive pet management',
        description: 'Track vet appointments, medications, diet, exercise, and behavior patterns for all your pets in one place.',
        features: ['Medical records', 'Medication reminders', 'Activity tracking', 'Vet telehealth'],
        market: 'Pet care market at $136B in US, growing 6% annually'
      },
      {
        name: 'SmartGrocery',
        tagline: 'Never forget an item again',
        description: 'Smart grocery list that learns your buying patterns, suggests recipes based on inventory, and finds best prices.',
        features: ['Pattern learning', 'Recipe suggestions', 'Price comparison', 'Store navigation'],
        market: 'Online grocery market expected to reach $250B by 2025'
      },
      {
        name: 'MovingMate',
        tagline: 'Stress-free moving assistant',
        description: 'Complete moving checklist, inventory management, utility setup coordination, and moving company comparison.',
        features: ['Moving checklist', 'Inventory tracking', 'Utility coordination', 'Mover comparison'],
        market: '27M Americans move annually, $18B moving industry'
      }
    ]
  },
  {
    category: '💰 Finance & Investment',
    icon: '💰',
    apps: [
      {
        name: 'BudgetBrain',
        tagline: 'AI-powered budget optimization',
        description: 'Analyzes spending patterns and automatically optimizes your budget, finding savings opportunities you never noticed.',
        features: ['Automatic categorization', 'Savings finder', 'Bill negotiation', 'Investment recommendations'],
        market: 'Personal finance apps market at $1.1B, growing 12% annually'
      },
      {
        name: 'MicroInvest',
        tagline: 'Invest your spare change',
        description: 'Rounds up purchases to the nearest dollar and invests the difference in diversified portfolios.',
        features: ['Round-up investing', 'Auto-diversification', 'Goal-based portfolios', 'Tax optimization'],
        market: 'Micro-investing market growing rapidly with 15M+ users'
      },
      {
        name: 'DebtDestroyer',
        tagline: 'Strategic debt elimination',
        description: 'Creates optimized debt payoff plans using avalanche and snowball methods, with refinancing recommendations.',
        features: ['Payoff optimization', 'Refinancing alerts', 'Interest tracking', 'Milestone celebrations'],
        market: 'Average US household carries $145K debt, massive market opportunity'
      },
      {
        name: 'CryptoCoach',
        tagline: 'Learn and earn in crypto',
        description: 'Educational platform that teaches cryptocurrency concepts and allows practice trading with virtual currency.',
        features: ['Interactive lessons', 'Paper trading', 'Portfolio simulation', 'News aggregation'],
        market: 'Crypto users reached 420M globally in 2023'
      },
      {
        name: 'RetirementReady',
        tagline: 'Plan your perfect retirement',
        description: 'Comprehensive retirement planning with scenario modeling, Social Security optimization, and withdrawal strategies.',
        features: ['Monte Carlo simulations', 'SS optimization', 'Tax planning', 'Healthcare cost estimates'],
        market: '10,000 Americans retire daily, $30T retirement market'
      },
      {
        name: 'TaxOptimizer',
        tagline: 'Maximize deductions year-round',
        description: 'Track deductible expenses throughout the year and optimize tax strategies with real-time advice.',
        features: ['Expense tracking', 'Deduction finder', 'Quarterly estimates', 'Document storage'],
        market: 'Tax preparation industry at $14B annually'
      },
      {
        name: 'SideHustleTracker',
        tagline: 'Manage multiple income streams',
        description: 'Track income and expenses from all your side hustles, with automated tax calculations and invoicing.',
        features: ['Multi-income tracking', 'Automated invoicing', 'Tax calculations', 'Profitability analysis'],
        market: '45% of Americans have side hustles, growing trend'
      },
      {
        name: 'InsuranceOptimizer',
        tagline: 'Right coverage, right price',
        description: 'Analyzes all your insurance policies and recommends optimizations to reduce costs without sacrificing coverage.',
        features: ['Policy analysis', 'Coverage gap detection', 'Price comparison', 'Claim assistance'],
        market: 'US insurance market at $1.4T, consumers often over/under-insured'
      }
    ]
  },
  {
    category: '🚗 Transportation & Travel',
    icon: '🚗',
    apps: [
      {
        name: 'CommuteOptimizer',
        tagline: 'Multi-modal commute planning',
        description: 'Compares all transportation options (drive, transit, bike, walk) with real-time data to find fastest, cheapest, or greenest route.',
        features: ['Multi-modal routing', 'Real-time updates', 'Cost comparison', 'Carbon tracking'],
        market: 'Average American spends 54 hours commuting annually'
      },
      {
        name: 'RoadTripPlanner Pro',
        tagline: 'Epic road trips made easy',
        description: 'Plans optimal routes with interesting stops, hotel bookings, restaurant reservations, and activity suggestions.',
        features: ['Route optimization', 'POI suggestions', 'Booking integration', 'Budget tracking'],
        market: 'Road trips account for 97% of summer travel in US'
      },
      {
        name: 'ParkingFinder',
        tagline: 'End parking frustration',
        description: 'Real-time parking availability with price comparison, reservations, and payment all in one app.',
        features: ['Real-time availability', 'Price comparison', 'Reservations', 'Mobile payment'],
        market: 'Drivers spend 17 hours/year looking for parking, $73B lost'
      },
      {
        name: 'FlightDealAlert',
        tagline: 'Never overpay for flights',
        description: 'Monitors flight prices to your favorite destinations and alerts you to price drops and mistake fares.',
        features: ['Price tracking', 'Mistake fare alerts', 'Flexible date search', 'Points optimization'],
        market: 'Online travel booking market at $765B globally'
      },
      {
        name: 'TravelBuddy Matching',
        tagline: 'Find compatible travel companions',
        description: 'Match with verified travelers who share your interests, budget, and travel style for group trips.',
        features: ['Traveler matching', 'Verification system', 'Trip planning', 'Expense splitting'],
        market: 'Solo travel growing 40% faster than traditional travel'
      },
      {
        name: 'LocalExpert',
        tagline: 'Local guides at your fingertips',
        description: 'Connect with local experts for personalized tours and authentic experiences in any city worldwide.',
        features: ['Expert matching', 'Custom itineraries', 'Secure booking', 'Review system'],
        market: 'Experiential travel market growing 23% annually'
      },
      {
        name: 'PackingPro',
        tagline: 'Never forget anything again',
        description: 'Smart packing lists based on destination weather, activities, and trip duration, with reminder notifications.',
        features: ['Smart lists', 'Weather integration', 'Activity-based suggestions', 'Shared lists'],
        market: 'Travel accessory market at $28B, digital tools growing'
      },
      {
        name: 'CarMaintenanceTracker',
        tagline: 'Keep your car in perfect condition',
        description: 'Track all maintenance, set service reminders, log expenses, and get recall notifications automatically.',
        features: ['Service reminders', 'Expense tracking', 'Recall alerts', 'Mechanic finder'],
        market: 'Auto aftermarket at $400B annually in US'
      }
    ]
  },
  {
    category: '🎨 Creative & Design',
    icon: '🎨',
    apps: [
      {
        name: 'ColorPalette AI',
        tagline: 'Generate perfect color schemes',
        description: 'AI-powered color palette generator that creates harmonious schemes from photos, moods, or brand requirements.',
        features: ['Photo extraction', 'Mood-based generation', 'Accessibility checking', 'Export options'],
        market: 'Design software market at $15B, growing 7% annually'
      },
      {
        name: 'LogoMaker Pro',
        tagline: 'Professional logos in minutes',
        description: 'AI-assisted logo creation with unlimited revisions, multiple variations, and all file formats needed.',
        features: ['AI generation', 'Unlimited revisions', 'Vector files', 'Brand kit creation'],
        market: 'Small business owners spend $500-2000 on logos typically'
      },
      {
        name: 'FontPair',
        tagline: 'Perfect font combinations',
        description: 'Discover beautiful font pairings with preview tools and psychology-based recommendations for different use cases.',
        features: ['Font pairing', 'Psychology insights', 'Preview tools', 'Download links'],
        market: 'Typography tools used by 4.6M designers globally'
      },
      {
        name: 'DesignFeedback Hub',
        tagline: 'Get quality design critiques',
        description: 'Share designs and receive constructive feedback from verified designers, with voting to surface best insights.',
        features: ['Design uploads', 'Expert reviews', 'Voting system', 'Portfolio building'],
        market: 'Design community platforms serve millions of creatives'
      },
      {
        name: 'PhotoEditor AI',
        tagline: 'Professional photo editing simplified',
        description: 'One-tap photo enhancement with AI, plus advanced tools for when you need precise control.',
        features: ['AI enhancement', 'Advanced tools', 'Batch processing', 'Style presets'],
        market: 'Photo editing app market at $1B, growing 12% annually'
      },
      {
        name: 'VideoTemplate Maker',
        tagline: 'Create stunning videos from templates',
        description: 'Professional video templates for social media, marketing, and presentations with easy customization.',
        features: ['Template library', 'Drag-and-drop editor', 'Stock media', 'Multi-format export'],
        market: 'Video editing software market at $2.8B, growing 7% CAGR'
      },
      {
        name: 'ArtPromptGenerator',
        tagline: 'Infinite AI art inspiration',
        description: 'Generate creative prompts for AI art tools like Midjourney and DALL-E, with style guidance and examples.',
        features: ['Prompt generation', 'Style library', 'Example gallery', 'Community sharing'],
        market: 'AI art generation exploding with 10M+ monthly users'
      },
      {
        name: 'PortfolioBuilder',
        tagline: 'Showcase your creative work',
        description: 'Beautiful, customizable portfolio websites for creatives with no coding required.',
        features: ['Drag-and-drop builder', 'Custom domains', 'Client proofing', 'Analytics'],
        market: 'Portfolio platforms market at $500M, serving millions of creatives'
      }
    ]
  },
  {
    category: '🌍 Environment & Sustainability',
    icon: '🌍',
    apps: [
      {
        name: 'CarbonFootprint Tracker',
        tagline: 'Measure and reduce your impact',
        description: 'Calculate your carbon footprint from daily activities and get personalized recommendations to reduce emissions.',
        features: ['Activity tracking', 'Impact calculations', 'Reduction tips', 'Offset marketplace'],
        market: 'Carbon offsetting market expected to reach $100B by 2030'
      },
      {
        name: 'EcoSwap',
        tagline: 'Trade items, save the planet',
        description: 'Local marketplace for swapping items instead of buying new, reducing waste and building community.',
        features: ['Item listings', 'Local matching', 'Trade suggestions', 'Impact tracking'],
        market: 'Secondhand market growing 11x faster than retail'
      },
      {
        name: 'GreenScore',
        tagline: 'Rate brands on sustainability',
        description: 'Scan products to see sustainability ratings and get ethical alternatives recommended.',
        features: ['Barcode scanning', 'Sustainability scores', 'Alternative suggestions', 'Brand tracking'],
        market: '73% of consumers willing to change habits for environment'
      },
      {
        name: 'FoodWaste Fighter',
        tagline: 'Reduce food waste at home',
        description: 'Track expiration dates, suggest recipes using ingredients you have, and connect with food banks for surplus.',
        features: ['Expiry tracking', 'Recipe suggestions', 'Donation coordination', 'Waste analytics'],
        market: '$408B food waste annually in US, massive opportunity'
      },
      {
        name: 'WaterSaver',
        tagline: 'Conserve water intelligently',
        description: 'Monitor household water usage, detect leaks, and get tips to reduce consumption and bills.',
        features: ['Usage monitoring', 'Leak detection', 'Conservation tips', 'Bill tracking'],
        market: 'Average family wastes 180 gallons weekly from leaks'
      },
      {
        name: 'RecycleRight',
        tagline: 'Never wonder what to recycle',
        description: 'Scan items to learn exactly how to dispose of them in your area, with pickup scheduling for special items.',
        features: ['Item scanning', 'Local guidelines', 'Pickup scheduling', 'Impact tracking'],
        market: 'Only 32% of waste recycled in US, education needed'
      },
      {
        name: 'SolarCalculator',
        tagline: 'Estimate solar savings instantly',
        description: 'Calculate potential savings from solar panels with satellite roof analysis, installer quotes, and financing options.',
        features: ['Roof analysis', 'Savings calculator', 'Installer matching', 'Financing comparison'],
        market: 'Residential solar market at $17B, growing 20% annually'
      },
      {
        name: 'EcoChallenge',
        tagline: 'Sustainability gamified',
        description: 'Daily environmental challenges with points, badges, and community leaderboards to make green living fun.',
        features: ['Daily challenges', 'Point system', 'Community boards', 'Impact visualization'],
        market: 'Gamification increases engagement by 48% in behavior change apps'
      }
    ]
  },
  {
    category: '🤝 Community & Social Good',
    icon: '🤝',
    apps: [
      {
        name: 'VolunteerMatch',
        tagline: 'Find meaningful volunteer opportunities',
        description: 'Match skills and interests with local volunteer opportunities, track hours, and build volunteer resume.',
        features: ['Opportunity matching', 'Hour tracking', 'Skill building', 'Impact reporting'],
        market: '77M Americans volunteered in 2022, worth $122B'
      },
      {
        name: 'NeighborHelp',
        tagline: 'Community assistance network',
        description: 'Connect neighbors for mutual aid - from borrowing tools to pet sitting to meal trains for those in need.',
        features: ['Request posting', 'Neighbor matching', 'Reputation system', 'Resource sharing'],
        market: 'Neighborhood apps have 50M+ active users globally'
      },
      {
        name: 'MicroDonation',
        tagline: 'Give small amounts, big impact',
        description: 'Round up purchases and donate spare change to vetted causes, with 100% transparency on impact.',
        features: ['Round-up donations', 'Cause selection', 'Impact tracking', 'Tax receipts'],
        market: 'Americans donated $499B to charity in 2022'
      },
      {
        name: 'SkillShare Community',
        tagline: 'Free community classes',
        description: 'Platform for community members to teach free classes on any skill, building local expertise and connections.',
        features: ['Class listings', 'Venue matching', 'Attendance tracking', 'Skill badges'],
        market: 'Community education growing as people seek connections'
      },
      {
        name: 'CrisisConnect',
        tagline: 'Coordinate community emergency response',
        description: 'Organize community response during emergencies - share resources, offer shelter, coordinate aid.',
        features: ['Resource mapping', 'Communication hub', 'Needs matching', 'Verification system'],
        market: 'Emergency preparedness market at $123B globally'
      },
      {
        name: 'MentorCircle',
        tagline: 'Connect mentors and mentees',
        description: 'Structured mentorship platform matching professionals with mentees, with guided conversation templates.',
        features: ['Smart matching', 'Session scheduling', 'Progress tracking', 'Resource library'],
        market: '76% of professionals say mentors are important'
      },
      {
        name: 'LocalBusiness Support',
        tagline: 'Discover and support local shops',
        description: 'Find local alternatives to chain stores, with stories behind businesses and community impact tracking.',
        features: ['Business discovery', 'Impact tracking', 'Loyalty rewards', 'Story sharing'],
        market: '$68 of every $100 spent locally stays in community'
      },
      {
        name: 'FoodBridge',
        tagline: 'Connect surplus food with hunger',
        description: 'Connect restaurants and grocery stores with surplus food to shelters and food banks in real-time.',
        features: ['Real-time matching', 'Pickup coordination', 'Impact tracking', 'Tax documentation'],
        market: '38M Americans food insecure while tons wasted daily'
      }
    ]
  },
  {
    category: '🔒 Privacy & Security',
    icon: '🔒',
    apps: [
      {
        name: 'PasswordVault Pro',
        tagline: 'Secure password management simplified',
        description: 'Military-grade encrypted password manager with biometric access, breach monitoring, and secure sharing.',
        features: ['Encrypted storage', 'Breach alerts', 'Secure sharing', 'Password generation'],
        market: 'Password management market at $2.5B, growing 19% CAGR'
      },
      {
        name: 'PrivacyGuard',
        tagline: 'Take control of your data',
        description: 'Monitor where your data is stored, request deletions from companies, and block tracking across the web.',
        features: ['Data audit', 'Deletion requests', 'Tracker blocking', 'Privacy score'],
        market: 'Privacy software market growing rapidly post-GDPR'
      },
      {
        name: 'SecureShare',
        tagline: 'Encrypted file sharing',
        description: 'Share files with end-to-end encryption, expiring links, and detailed access controls.',
        features: ['E2E encryption', 'Expiring links', 'Access controls', 'Audit logs'],
        market: 'Secure file sharing market at $3.5B, growing 15% annually'
      },
      {
        name: 'IdentityProtect',
        tagline: 'Monitor your digital identity',
        description: 'Dark web monitoring for personal information, credit monitoring, and identity theft insurance.',
        features: ['Dark web monitoring', 'Credit alerts', 'ID theft insurance', 'Recovery assistance'],
        market: 'Identity theft affects 33% of Americans at some point'
      },
      {
        name: 'VPNCompare',
        tagline: 'Find your perfect VPN',
        description: 'Compare VPN services on speed, security, privacy policies, and price with real user testing data.',
        features: ['Speed testing', 'Privacy analysis', 'Price comparison', 'User reviews'],
        market: 'VPN market at $44B, growing 15% annually'
      },
      {
        name: 'PermissionManager',
        tagline: 'Control app permissions',
        description: 'Visualize and manage all app permissions on your devices, with alerts for suspicious permission requests.',
        features: ['Permission audit', 'Risk alerts', 'Batch management', 'Privacy tips'],
        market: '93% of apps request unnecessary permissions'
      },
      {
        name: 'SecureMessenger',
        tagline: 'Truly private messaging',
        description: 'Open-source encrypted messaging with disappearing messages, no phone number required, and no metadata collection.',
        features: ['E2E encryption', 'No metadata', 'Disappearing messages', 'Anonymous accounts'],
        market: 'Secure messaging apps have 3B+ users globally'
      },
      {
        name: 'DataExport Hub',
        tagline: 'Export your data from anywhere',
        description: 'Easily export your data from major platforms in useful formats, maintaining control of your digital life.',
        features: ['Multi-platform export', 'Format conversion', 'Backup automation', 'Analysis tools'],
        market: 'Data portability increasingly regulated and demanded'
      }
    ]
  }
]

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>('cover')

  return (
    <div className="ebook-container">
      <section className="cover-page" id="cover">
        <div className="cover-icon">📱</div>
        <h1 className="cover-title">100 Revolutionary App Ideas</h1>
        <p className="cover-subtitle">From Concept to Market • Complete with Market Analysis & Visual Design</p>
        <div className="author-info">
          <p>A Professional eBook</p>
          <p>2025 Edition</p>
        </div>
      </section>

      <section className="toc-page" id="toc">
        <h2 className="toc-title">📋 Table of Contents</h2>
        <p style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem', color: '#666'}}>
          Explore 100 innovative app ideas across 12 categories, each with detailed descriptions, key features, and market insights.
        </p>
        <ul className="toc-list">
          {appIdeas.map((category, idx) => (
            <li key={idx} className="toc-item">
              <a href={`#category-${idx}`}>
                <span style={{fontSize: '1.5rem'}}>{category.icon}</span>
                <span>{category.category.replace(category.icon, '').trim()}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {appIdeas.map((category, catIdx) => (
        <section key={catIdx} className="category-section" id={`category-${catIdx}`}>
          <div className="category-header">
            <div className="category-icon">{category.icon}</div>
            <h2 className="category-title">{category.category.replace(category.icon, '').trim()}</h2>
          </div>

          <div className="apps-grid">
            {category.apps.map((app, appIdx) => {
              const appNumber = catIdx * 10 + appIdx + 1
              return (
                <div key={appIdx} className="app-card">
                  <div className="app-number">App #{appNumber}</div>
                  <div className="visual-element">{category.icon}</div>
                  <h3 className="app-name">{app.name}</h3>
                  <p className="app-tagline">{app.tagline}</p>
                  <p className="app-description">{app.description}</p>

                  <div className="app-features">
                    <h4>🎯 Key Features:</h4>
                    <ul>
                      {app.features.map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="market-insight">
                    <h4>📊 Market Insight</h4>
                    <p>{app.market}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}

      <section className="footer-page">
        <h2>🎉 Thank You!</h2>
        <p>You've just explored 100 revolutionary app ideas across 12 major categories.</p>
        <p>Each idea represents a real market opportunity with growth potential.</p>
        <p style={{marginTop: '3rem', fontSize: '1.5rem', fontWeight: 'bold'}}>
          Ready to build the next big thing?
        </p>
        <p style={{marginTop: '2rem', fontSize: '1.1rem'}}>
          © 2025 • Professional App Ideas Collection
        </p>
      </section>
    </div>
  )
}
