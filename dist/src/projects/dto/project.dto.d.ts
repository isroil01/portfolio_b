export declare class CreateProjectDto {
    slug: string;
    title: string;
    excerpt: string;
    description: string;
    category: string;
    content?: string;
    stack: string[];
    tags: string[];
    technologies: string[];
    features: string[];
    challenges: string[];
    solutions: string[];
    featured?: boolean;
    coverImage?: string;
    galleryImages?: string[];
    liveUrl?: string;
    repoUrl?: string;
    date?: string;
}
export declare class UpdateProjectDto {
    title?: string;
    excerpt?: string;
    description?: string;
    category?: string;
    content?: string;
    stack?: string[];
    tags?: string[];
    technologies?: string[];
    features?: string[];
    challenges?: string[];
    solutions?: string[];
    featured?: boolean;
    coverImage?: string;
    galleryImages?: string[];
    liveUrl?: string;
    repoUrl?: string;
    date?: string;
}
