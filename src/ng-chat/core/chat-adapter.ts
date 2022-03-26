import { Observable } from 'rxjs';
import { Message } from "./message";
import { User } from "./user";
import { ParticipantResponse } from "./participant-response";
import { IChatParticipant } from './chat-participant';

export abstract class ChatAdapter
{
    // ### Abstract adapter methods ###

    public abstract listFriends(): Observable<ParticipantResponse[]>;
    
    public abstract getMessageHistory(destinataryId: any): Observable<Message[]>;

    public abstract sendMessage(message: Message): void;

    // ### Adapter/Chat income/ingress events ###

    public onFriendsListChanged(participantsResponse: ParticipantResponse[]): void
    {
        this.friendsListChangedHandler(participantsResponse);
    }

    public onMessageReceived(participant: IChatParticipant, message: Message): void
    {
        this.messageReceivedHandler(participant, message);
    }

    public updateMessageStatus(participant: IChatParticipant, message: Message): void
    {
        this.updateMessageStatusHandler(participant, message);
    }
    
    // public addMessageToRoom(chatId: string, message: Message)
    // {
    //     this.addMessageToRoomHandler(chatId, message);
    // }
    public onDispatcherMessage(participant: IChatParticipant, message: Message): void {
        this.autoMessageHandler(participant, message);
    }
    // Event handlers
    /** @internal */
    friendsListChangedHandler: (participantsResponse: ParticipantResponse[]) => void  = (participantsResponse: ParticipantResponse[]) => {};
    /** @internal */
    messageReceivedHandler: (participant: IChatParticipant, message: Message) => void = (participant: IChatParticipant, message: Message) => {};
        /** @internal */
    updateMessageStatusHandler: (participant: IChatParticipant, message: Message) => void = (participant: IChatParticipant, message: Message) => {};
    /** @internal */
    // addMessageToRoomHandler: (chatId: string, message: Message) => void = (chatId, message) => {};
    /** @internal */
    autoMessageHandler: (participant: IChatParticipant, message: Message) => void = (participant: IChatParticipant, message: Message) => { };
}
