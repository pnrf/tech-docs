import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Analytics } from "@vercel/analytics/react"

const config: DocsThemeConfig = {
	logo: (
    <>
			<img src='https://avatars.githubusercontent.com/u/95383223?v=4' alt='аватарка' style={{width:"40px", borderRadius: "50%"}}/>
			{/* <svg width="38px" height="38px" viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M88.587,25.783L46.581,5.826c-0.672-0.317-1.45-0.317-2.12,0L2.462,25.783 c-0.861,0.408-1.41,1.277-1.41,2.232c0,0.951,0.549,1.819,1.41,2.229l41.999,19.954c0.335,0.158,0.697,0.239,1.059,0.239 c0.363,0,0.726-0.081,1.061-0.239l42.006-19.954c0.861-0.41,1.41-1.278,1.41-2.229C89.997,27.06,89.448,26.191,88.587,25.783z" fill="#647F94"></path> <path d="M45.521,68.085c-0.483,0-0.965-0.105-1.414-0.317L2.109,47.813c-1.643-0.781-2.341-2.744-1.562-4.386 c0.78-1.642,2.742-2.341,4.388-1.562l40.584,19.283l40.595-19.283c1.639-0.78,3.606-0.083,4.386,1.562 c0.78,1.643,0.083,3.605-1.562,4.386L46.934,67.768C46.487,67.979,46.004,68.085,45.521,68.085z" fill="#45596B"></path> <path d="M45.521,84.912c-0.483,0-0.965-0.105-1.414-0.317L2.109,64.641c-1.643-0.78-2.341-2.746-1.562-4.389 c0.78-1.645,2.742-2.342,4.388-1.562l40.584,19.282L86.115,58.69c1.642-0.78,3.606-0.083,4.386,1.562 c0.78,1.643,0.083,3.608-1.56,4.389L46.934,84.595C46.487,84.807,46.004,84.912,45.521,84.912z" fill="#45596B"></path> </g> </g> </g></svg> */}
			<div style={{ marginLeft: '.8em', display: 'flex', flexDirection: 'column', color: '#647F94' }}>
				<span style={{ fontWeight: 800, lineHeight: '1.2em' }}>
					Мой репозиторий
				</span>
				<span style={{ fontWeight: 400, fontSize: '.8em', lineHeight: '1.2em' }}>
					сайт технического писателя
				</span>
			</div>
    </>
  ),
  project: {
    link: 'https://github.com/pnrf/tech-docs',
  },
	search: {
		placeholder: 'Поиск по сайту...'
	},
	chat: {
    link: 'https://t.me/pnrf_tg',
    icon: (
			<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"></circle> <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#37BBFE"></stop> <stop offset="1" stop-color="#007DBB"></stop> </linearGradient> </defs> </g></svg>
    )
  },
  // docsRepositoryBase: 'https://github.com/pnrf/tech-docs',
	sidebar: {
		toggleButton: true
	},
	toc: {
		title: "На странице"
	},
	editLink: { 
		component: null
	},
	feedback: {
		content: null
	},
  footer: {
    text: (
      <span>
        <p>©{' Myrepo.ru'}, {new Date().getFullYear()}. {' Все права защищены.'} </p>
				<span>
					Сайт работает на <a href="https://github.com" target="_blank"> Github</a>, <a href="https://vercel.com" target="_blank">Vercel</a>, <a href="https://nextjs.org" target="_blank"> Next.js</a> и <a href="https://nextra.site" target="_blank"> Nextra</a>
				</span>
				<Analytics />
      </span>
    )
  },
	themeSwitch: {
    useOptions() {
      return {
        light: 'Светлая тема',
        dark: 'Темная тема',
        system: 'Системная тема'
      }
    }
  },
	faviconGlyph: 'ℹ️',
	useNextSeoProps() {
    return {
			title: 'Мой репозиторий',
      titleTemplate: '%s'
    }
  },
	head: (
    <>
      <meta property="og:description" content="Персональный сайт технического писателя" />
			<meta name="robots" content="noindex, nofollow" />
    </>
  )
}

export default config
