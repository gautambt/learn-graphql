const config = {
	"gatsby": {
		"pathPrefix": "/learn/graphql/react-rxdb-offline-first",
		"siteUrl": "https://hasura.io",
		"gaTrackingId": "GTM-WBBW2LN",
		"trailingSlash": true
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/logo.png",
		"logoLink": "https://hasura.io/learn/",
		"title": "<a href='https://hasura.io/learn/'>/ graphql </a><a href='https://hasura.io/learn/graphql/react-rxdb-offline-first/introduction/'>/ react-rxdb </a>",
		"githubUrl": "https://github.com/hasura/learn-graphql",
		"helpUrl": "https://hasura.io/discord",
		"tweetText": "Check out this Offline first course for React developers by @HasuraHQ https://hasura.io/learn/graphql/react-rxdb-offline-first/introduction",
		"links": [{
			"text": "hasura.io",
			"link": "https://hasura.io"
		}],
		"search": {
			"enabled": false,
			"indexName": "learn-react-rxdb",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction/",
			"/intro-to-offline-first/",
			"/hasura-setup/",
			"/frontend-setup/",
			"/syncing-rxdb-with-hasura/",
			"/what-next/"
    	],
		"links": [
			{
			"text": "Hasura Docs",
			"link": "https://hasura.io/docs"
			},
			{
			"text": "GraphQL Docs",
			"link": "https://graphql.org/learn"
			}
		],
		"frontline": false,
		"ignoreIndex": true
	},
	"siteMetadata": {
		"title": "2 hour course on building offline first for React developers | Hasura",
		"description": "A concise and powerful tutorial that covers fundamental concepts of Offline first and implementing offline first in a React App using RxDB and Hasura GraphQL",
		"ogImage": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-card-react-rxdb.png",
		"docsLocation": "https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/react-rxdb/tutorial-site/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react-rxdb/rxdb-favicon.png"
	},
};

module.exports = config;
