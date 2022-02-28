import Env from "../components/environments/AppEnvironment.enum";
import { IEnvfiguration } from "../components/environments/IConfiguration";

export const devConfiguration: IEnvfiguration = {
    ENVIRONMENT: Env.DEV,
    ANALYTICS: "https://firebase-dev/env.json"
}