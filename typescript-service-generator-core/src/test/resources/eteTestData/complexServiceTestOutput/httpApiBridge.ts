// Copyright
// Generated
module ModuleName {

    export interface IHttpEndpointOptions {
        serviceIdentifier?: string;
        endpointPath: string;
        endpointName: string;
        method: string;
        mediaType: string;
        requiredHeaders: string[];
        pathArguments: any[];
        queryArguments: any;
        data?: any;
    }

    export interface IHttpApiBridge {
        callEndpoint<T>(parameters: IHttpEndpointOptions): FooReturn<T>;
    }
}
