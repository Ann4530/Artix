
export interface Package {
    packageId: string | number;
    packageName: string;
    packageDescription: string;
    packagePrice: number;
}

export interface CurrentPackage {
    currentPackageId: string | number;
    creatorId: string | number; // from table creator FK
    packageId: string | number; // from table package FK
    Date: string | Date; // ISO date
}

