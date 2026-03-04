export declare enum PostStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED"
}
export declare class CreatePostDto {
    slug: string;
    title: string;
    excerpt: string;
    contentMarkdown: string;
    status: PostStatus;
    readTime?: string;
    coverImage?: string;
    tags: string[];
    seoTitle?: string;
    seoDescription?: string;
}
export declare class UpdatePostDto {
    title?: string;
    excerpt?: string;
    contentMarkdown?: string;
    status?: PostStatus;
    readTime?: string;
    coverImage?: string;
    tags?: string[];
    seoTitle?: string;
    seoDescription?: string;
}
