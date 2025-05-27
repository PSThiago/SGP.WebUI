import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import type { Processo } from "../types/Processo";

type ProcessoCallbacks = {
    onAdicionado: (p: Processo) => void;
    onAtualizado: (p: Processo) => void;
    onRemovido: (id: string) => void;
}

let connection: HubConnection;

export const connectToHub = async (callbacks: ProcessoCallbacks) => {
    connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7118/hub/processos")
        .withAutomaticReconnect()
        .build();

    connection.on("ProcessoAdicionado", (p: Processo) => callbacks.onAdicionado(p));
    connection.on("ProcessoAtualizado", (p: Processo) => callbacks.onAtualizado(p));
    connection.on("ProcessoRemovido", (id: string) => callbacks.onRemovido(id));

    try {
        await connection.start();
    } catch (err) {
        console.error(err);
    }
}

export const disconnectHub = async () => {
    if (connection) {
        await connection.stop();
    }
}