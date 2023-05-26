export default function useCommonApi(emit) {
  async function onDetect(resultPromise) {
    emit("detect", resultPromise);
    try {
      const { content } = await resultPromise;
      if (content !== null) {
        emit("decode", content);
      }
      else {emit("decode", {error:true, message:"Can't parse image, please try make another photo"}); }
    } catch (error) {
      // fail silently
    }
  }
  return {
    onDetect,
  };
}
