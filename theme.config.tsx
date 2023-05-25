import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  // logo: <span>My Project</span>,
	logo: (
    <>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Myrepo.ru |
      </span>
			<span style={{ marginLeft: '.4em', fontWeight: 400, fontSize: '.9em' }}>
        База знаний технического писателя
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/pnrf/tech-docs',
  },
  // chat: {
  //   link: 'https://discordapp.com/users/1058075588700672041',
  // },
  docsRepositoryBase: 'https://github.com/pnrf/tech-docs',
  footer: {
    text: (
      <span>
        <p>{new Date().getFullYear()} ©{' Все права защищены. '}</p>
        <a href="https://nextra.site" target="_blank">
          Powered by Nextra
        </a>
        .
      </span>
    ),
  },
}

export default config
