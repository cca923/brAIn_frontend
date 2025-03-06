export const folderSelector = (state) => state.folders;

export const fileSelector = (state) => state.files;

export const isPageLoadingSelector = (state) => {
  const { folders, files } = state;
  const isLoadingFolders = folders?.loadingMap?.loadFolders;
  const isLoadingFiles = files?.loadingMap?.loadFiles;

  return isLoadingFolders || isLoadingFiles;
};
