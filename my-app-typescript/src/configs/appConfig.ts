import Env from "../components/environments/AppEnvironment.enum";
import { IEnvConfig } from "../components/environments/IConfiguration";
import { devConfiguration } from "./config.dev";

interface IConfig {
    getConfig() : IEnvConfig;
    setConfig( env:Env | null ) : void;
    init():void
}

function getConfiguration (env:String | null ) : IEnvConfig  
{
    switch(env){
        case Env.DEV:
            return devConfiguration;
        default:
            return devConfiguration;
    }
}

export class AppConfig implements IConfig {

    private _configuration:IEnvConfig; 
    private static _instance : AppConfig;

    private constructor () {

        if(window.location.hostname === 'localhost')
            this._configuration = getConfiguration("DEV");
        else
            this._configuration = getConfiguration(null);
    }

    public static getInstance():AppConfig {
        //note circular braces around the statement
        return this._instance || (this._instance = new this());        
    }

    getConfig(): IEnvConfig {
        return this._configuration;
    }

    setConfig(env: Env | null): void {
        this._configuration = getConfiguration(env);
    }

    init(): void {
        this._configuration = getConfiguration(null);
    }

    toString(): String{
        return JSON.stringify(this);
    }

}

const appConfig:AppConfig = AppConfig.getInstance();

//both are same
//export default appConfig ;
export { appConfig as appConfig};





