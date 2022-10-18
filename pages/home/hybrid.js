
export const isInApp = () => /my\-app/ig.test(window.navigator.userAgent)

export const getVersions = () => window?.versions ?? null

export const getActions = () => window?.actions ?? null