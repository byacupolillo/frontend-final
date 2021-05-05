
export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goBack = (history) => {
  history.goBack();
};

export const goToSignUpPage = (history) => {
  history.push("/signup");
};

export const goToFeedPage = (history) => {
  history.push("/feed");
};

export const goToAddImage = (history) => {
  history.push("/new-image")
}

export const goToDetail = (history, id) => {
  history.push(`/detail/${id}`)
}

