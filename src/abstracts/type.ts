export interface ILoginData {
	userEmail: string;
	userPassword: string;
}

export interface IRegisterData extends ILoginData {
	userNickname: string;
}

export type CategoryBtnType = {
	categoryName: string;
	onClick: React.MouseEventHandler<HTMLElement>;
};

export type ICategoryObj = {
	categoryName: string;
	categoryId: number;
};

export type MainTitlePropsType = {
	category: ICategoryObj;
};

export type PostType = {
	postCategory: string;
	postAddDate: string;
	postLink: string;
};

export interface ICategory {
	categoryId: number;
	categoryName: string;
	favorite: boolean;
}

export type PostsPropsType = {
	posts: Array<PostType>;
};
