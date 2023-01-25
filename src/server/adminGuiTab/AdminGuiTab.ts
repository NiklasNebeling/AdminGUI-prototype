import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/adminGuiTab/index.html")
@PreventIframe("/adminGuiTab/config.html")
@PreventIframe("/adminGuiTab/remove.html")
export class AdminGuiTab {
}
