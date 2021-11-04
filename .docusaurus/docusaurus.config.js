export default {
  "title": "Enarx",
  "tagline": "WebAssembly + Confidential Computing",
  "url": "https://enarx.dev",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "trailingSlash": false,
  "favicon": "img/favicon.ico",
  "organizationName": "enarx",
  "projectName": "enarx",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "blog": {
          "blogTitle": "Resources",
          "blogSidebarTitle": "Resources",
          "blogSidebarCount": 1,
          "path": "resources",
          "routeBasePath": "resources",
          "showReadingTime": false
        },
        "docs": {
          "sidebarPath": "/home/nick/enarx-docs/docs/sidebars.js",
          "editUrl": "https://github.com/enarx/docs/blob/main"
        },
        "resources": {
          "showReadingTime": true,
          "editUrl": "https://github.com/enarx/resources/blob/main"
        },
        "theme": {
          "customCss": "/home/nick/enarx-docs/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Enarx",
      "logo": {
        "alt": "Enarx",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "Start/Introduction",
          "position": "left",
          "label": "Docs"
        },
        {
          "to": "/resources",
          "label": "Resources",
          "position": "left"
        },
        {
          "href": "https://github.com/enarx/enarx",
          "label": "GitHub",
          "position": "left"
        },
        {
          "href": "https://blog.enarx.dev",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://chat.enarx.dev",
          "label": "Chat",
          "position": "left"
        },
        {
          "href": "https://twitter.com/enarxproject",
          "label": "Twitter",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "/docs/Start/Introduction"
            },
            {
              "label": "Installation Guide",
              "to": "/docs/Installation/Introduction"
            },
            {
              "label": "Contributing Guide",
              "to": "/docs/Contributing/Introduction"
            },
            {
              "label": "Technical Overview",
              "to": "/docs/Technical/Introduction"
            }
          ]
        },
        {
          "title": "Code + Resources",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/enarx/enarx"
            },
            {
              "label": "Resources",
              "to": "/resources"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Blog",
              "to": "https://blog.enarx.dev"
            },
            {
              "label": "Chat",
              "href": "https://chat.enarx.dev"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/enarxproject"
            }
          ]
        }
      ],
      "copyright": "Enarx - 2021 - Creative Commons"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};