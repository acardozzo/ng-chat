export type MessageStatusType = {
    [key:string]:{
       shouldResend: boolean,
        iconTitle?: string,
        iconSource?: string,
        iconSize?: number,
        status: string,
        resendLabel?: string,
    }
}
