import axios from "axios";
import SegnalazioneModel from "../models/SegnalazioneModel";


const SEGNALAZIONI_API_BASE_URL = "http://localhost:8080";
const VERSION_URI = SEGNALAZIONI_API_BASE_URL + "/api/v1";
const SEGNALAZIONI_URI = VERSION_URI + "/segnalazione";
const GETALL_URI = SEGNALAZIONI_URI + "/segnalazioni";
const CREATE_URI = SEGNALAZIONI_URI + "/segnalazione";
const DELETE_URI = SEGNALAZIONI_URI + "/segnalazione/";
const FILTER_URI = SEGNALAZIONI_URI + "/filteredList";

const getSegnalazioni = async () => {
    try {
        return await axios.get(GETALL_URI);
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};

const createSegnalazioni = async (segnalazione: SegnalazioneModel) => {
    try {
        const response = await axios.post(CREATE_URI, segnalazione);
        return response;
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};

const deleteSegnalazione = async (segnalazioneid: number) => {
    try {
        const response = await axios.delete(DELETE_URI + segnalazioneid);
        return response;
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};


const filteredSegnalazione = async (dateSegnalazione: Date) => {
    try {
        const response = await axios.get(FILTER_URI + dateSegnalazione);
        return response;
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};


const filteredSegnalazioneBy = async (filterType: string, inputFiltered: string) => {
    try {
        const response = await axios.get(FILTER_URI,
            {
                params:
                {
                    filter: filterType,
                    inputFilter: inputFiltered
                }
            }
        );
        return response;
    } catch (error) {
        console.error("Error getting Filtered list:", error);
        throw error;
    }
};


const SegnalazioniService = {
    getSegnalazioni,
    createSegnalazioni,
    deleteSegnalazione,
    filteredSegnalazione,
    filteredSegnalazioneBy
};

export default SegnalazioniService;