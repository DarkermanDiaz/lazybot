const{SlashCommandBuilder,PermissionFlagsBits} = require('discord.js')

module.exports = 
{
    data: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Show the info of lazycoders community')
        .addChannelOption(option => option.setName('channel').setDescription('Choose the channel where you want to post the rules!(Only admin option)')),

    async execute(interaction)
    {
        const channel = interaction.options.getChannel('channel')
        const embed = 
        {
            color:3447003,
            title:'What is lazycoders about?',
            fields: [
                {
                    name: 'What is LazyCoders?',
                    value: 'LazyCoders is our way to create a community where anyone can start getting involved in the coding world. Also is the perfect place for coders with experience not only because they can collaborate and develop together, share knowledge or solve doubts but also because they can contribute to the community by teaching their skills in courses or solving doubts and getting rewarded for it. The community is created and managed by experienced coders who want to add real value to the community members and give some common sense to the NFT world.',
                },
                {
                    name: 'How many LazyCoders NFTs are there?',
                    value: 'There are 10,101 LazyCoders.',
                },
                {
                    name: 'Why we are not like any other NFT project?',
                    value: 'We are doxxed from the beginning, the team is not getting any profit in the first stages, and the minting funds will go straight to maintain the perks and benefits of the community, also if desired, members can be part of the senior team, providing services and creating software while getting rewarded for this.',
                },
                {
                    name: 'What are the perks?',
                    value: 'We are offering many perks such as ETH raffles, Poker tournaments, Courses and training, Coding competitions, API to practice, Access to NftMeta.tools, Support and consultancy, Activities and different channels on discord, Job Opportunities inside Lazy coders, Advance support in different languages and tools, Nft and software Accelerator (launch pad), Creation of teams to begin with community sustainability through offering services, games, and software development.',
                },
                {
                    name: 'Why NFTs?',
                    value: 'We strongly believe in the NFT and blockchain capabilities despite the fact that nowadays, around 90% or more of the NFT Collections are garbage and just wanted to make easy money.',
                },
                {
                    name: "What's the story behind the Lazy Coders art?",
                    value: "The art represents people working on their business and having the reactions we all have at some point, like being angry because something is not going as expected, being bored of doing the same, or even getting cocky because something works on the first try!"
                },
                {
                    name: "How will be the trainings?",
                    value: "We will start with basic training, which will depend on how many people we have in the community, as we get more people involved, more often will be the training, the topics will be decided with the votes of the community."
                },
                {
                    name: "How advanced will be the training?",
                    value: "It depends, we will start with basic training, and we will be doing more advanced ones as we continue growing. Of course, always taking into account the desires of the community."
                },
                {
                    name: "How to reach sustainability?",
                    value: "We will be offering many services in order to be sustainable, applications and games development, consultancy, software and NFT accelerator, training, merchandising, and recruitment, among others."
                },
                {
                    name: "How does the accelerator work?",
                    value: "We will help artists, nft enthusiasts, or anyone that wants to create a collection with all the processes involved."
                },
                {
                    name: "How this collection/brand offers job opportunities?",
                    value: "We will offer job opportunities to senior members who want to get involved as the brand grows. We'll be needing a lot of people doing a lot of different things."
                },
                {
                    name: "What is so special about this NFT collection?",
                    value: "This collection offers real value from the beginning, we are transparent, and we are not taking profit at the beginning, we want to build something long-term and sustainable along with the community, we are not obsessed with floor price, for us, the floor price is just a consequence of doing things right (in this collection at least)."
                },
                {
                    name: "What's NftMeta.tools?",
                    value: "Nftmeta is our awesome tool where you can check everything you need (NFT related) in one single place! Find opportunities, keep track of collections, check rarity, track any wallet, set alarms and much more! It'll be accessible for holders, and the community will decide on future improvements."
                },
                {
                    name: "How will be the coding contest?",
                    value: "It depends on the contest, we'll have different kinds, backend, frontend, problem-solving, API construction, game development, etc. The contests will have different deadlines and themes, it'll be really fun, promised ;)."
                },
                {
                    name: "Do the founders have time to dedicate to this project?",
                    value: "Right now we dedicate our free time to this project as we have a full-time jobs, one of our first goals is to get funds via minting to have a small salary that allows us to take this project as our full-time job."
                },
                {
                    name: "What about the merch?",
                    value: "It will be Merch as long as the community wants, we will vote for it in the future, and the benefits from the merch will be reinvested in the community as part of our sustainability idea."
                },
                {
                    name: "What's the ultimate goal of lazy coders?",
                    value: "We want to create not only a great community but also a great brand, that will provide services and will be involved in different real-life activities."
                },
                {
                    name: "Why show your faces from the beginning of the project?",
                    value: "We think transparency is crucial. We don't trust collections that are undoxxed, so we are not doing that. We don't have any reason to hide."
                },
                {
                    name: "There will be different roles inside the community?",
                    value: "Yes, there will be seniors, which will be the ones helping the other role, juniors. Seniors will be the ones with skills wanting to help the inexperienced people that want to learn in the community and they will be rewarded for that."
                },
                {
                    name: "Why ETH network?",
                    value: "We chose Ethereum blockchain because of its large market capitalization and user base, security, and mature platform and tools."
                },
                {
                    name: "What's the plan to keep the paperhands and flippers away?",
                    value: "We are not trying to get as max people as we can, we are not buying people on discord or Twitter, so we are not creating unreal hype, we want to grow in an organic way, where only the people that believe in the project will be the ones buying."
                },
                {
                    name: "Will be metaverse, staking, token, or any airdrop in the future?",
                    value: "We currently don't see any use for these, though people will vote and founders will obey =)"
                },
                {
                    name: "Which kind of smart contract are we using?",
                    value: "ERC-721a — Non-Fungible Token on Ethereum allows for multiple mints, at the gas fee of almost one NFT Created and shared by Team Azuki https://www.azuki.com/erc721a"
                },
                {
                    name: "Holding more than 1 lazyCoder gives you more benefits?",
                    value: "Yes, depending on the quantity they will have premium perks, we will explain all the details in the future."
                },
                {
                    name: "Is Lazy Coders interested in Charity organizations?",
                    value:"We will donate to charities related to our theme, you will know everything about how much we donate, how we do it and to whom, as we are completely transparent."
                }
            ],
        
        }
        if(!channel) return interaction.reply({ embeds:[embed],ephemeral:true })
        else if (!interaction.memberPermissions.has("ADMINISTRATOR")) return interaction.reply({ embeds:[embed] , ephemeral:true});
        
        return channel.send({ embeds: [embed] }), interaction.reply({content : 'Done!', ephemeral : true})
        
    }
}