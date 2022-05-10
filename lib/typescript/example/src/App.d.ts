export declare type RootStackParamList = {
    WebhookPaymentScreen: undefined;
    HomeScreen: undefined;
    NoWebhookPaymentScreen: undefined;
    CreateTokenScreen: undefined;
    ApplePayScreen: undefined;
    SetupFuturePaymentScreen: undefined;
    PaymentsUICompleteScreen: undefined;
    PaymentsUICustomScreen: undefined;
    CVCReCollectionScreen: undefined;
    IdealPaymentScreen: undefined;
    IdealSetupFuturePaymentScreen: undefined;
    AlipayPaymentScreen: undefined;
    PaymentResultScreen: {
        url: string;
    };
    SofortPaymentScreen: undefined;
    SofortSetupFuturePaymentScreen: undefined;
    FPXPaymentScreen: undefined;
    BancontactPaymentScreen: undefined;
    BancontactSetupFuturePaymentScreen: undefined;
    SepaPaymentScreen: undefined;
    SepaSetupFuturePaymentScreen: undefined;
    OxxoPaymentScreen: undefined;
    GiropayPaymentScreen: undefined;
    EPSPaymentScreen: undefined;
    GrabPayPaymentScreen: undefined;
    P24PaymentScreen: undefined;
    AuBECSDebitPaymentScreen: undefined;
    AfterpayClearpayPaymentScreen: undefined;
    KlarnaPaymentScreen: undefined;
    AuBECSDebitSetupPaymentScreen: undefined;
    MultilineWebhookPaymentScreen: undefined;
    GooglePayScreen: undefined;
    ACHPaymentScreen: undefined;
    ACHSetupScreen: undefined;
};
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}
export default function App(): JSX.Element;