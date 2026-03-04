export declare class CreateExperienceDto {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate?: string;
    isCurrent?: boolean;
    description: string;
    achievements: string[];
    responsibilities: string[];
    technologies: string[];
    highlights: string[];
    sortOrder?: number;
}
export declare class UpdateExperienceDto {
    company?: string;
    role?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    isCurrent?: boolean;
    description?: string;
    achievements?: string[];
    responsibilities?: string[];
    technologies?: string[];
    highlights?: string[];
    sortOrder?: number;
}
