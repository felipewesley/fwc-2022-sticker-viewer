export interface JogadorModel {

    id: string;
    name: string;
    position: string;
    birthDate: Date;
    height: number;
    weight: number;
    nationalTeamDebutYear: number;
    hasExtraCromo?: boolean;

}