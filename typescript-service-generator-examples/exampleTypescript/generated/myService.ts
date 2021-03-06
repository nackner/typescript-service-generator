// A potential copyright header
// A desired generated message
module MyProject.Http.MyService {

    export interface IMyObject {
        payload: string;
    }

    export interface IPlanet {
        name: string;
        radiusKm: number;
    }

    export interface IMyService {
        helloWorld(): ng.IPromise<IMyObject>;
        planets(): ng.IPromise<IPlanet[]>;
    }

    export class MyServiceImpl implements IMyService {

        private httpApiBridge: IHttpApiBridge;
        constructor(httpApiBridge: IHttpApiBridge) {
            this.httpApiBridge = httpApiBridge;
        }

        public helloWorld() {
            var httpCallData = <IHttpEndpointOptions> {
                serviceIdentifier: "myService",
                endpointPath: "myservice/foo_get",
                endpointName: "helloWorld",
                method: "GET",
                mediaType: "application/json",
                requiredHeaders: [],
                pathArguments: [],
                queryArguments: {
                },
                data: null
            };
            return this.httpApiBridge.callEndpoint<IMyObject>(httpCallData);
        }

        public planets() {
            var httpCallData = <IHttpEndpointOptions> {
                serviceIdentifier: "myService",
                endpointPath: "myservice/planets",
                endpointName: "planets",
                method: "GET",
                mediaType: "application/json",
                requiredHeaders: [],
                pathArguments: [],
                queryArguments: {
                },
                data: null
            };
            return this.httpApiBridge.callEndpoint<IPlanet[]>(httpCallData);
        }
    }
}
