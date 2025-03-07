export const folderSelector = (state) => state.folders;

export const fileSelector = (state) => state.files;

export const quizSelector = (state) => state.quiz;

export const isPageLoadingSelector = (state) => {
  const { folders, files, quiz } = state;

  const loadingStates = [
    folders?.loadingMap?.loadFolders,
    files?.loadingMap?.loadFiles,
    quiz?.loadingMap?.loadQuizzes,
    quiz?.loadingMap?.submitQuiz,
  ];

  return loadingStates.some((loadingState) => loadingState === true);
};
