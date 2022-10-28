BUILD_RESULT_PATH=../dist/fwc-2022-sticker-viewer

if [ ! -d "$BUILD_RESULT_PATH" ]; then
    mkdir $BUILD_RESULT_PATH
fi

# Clear old build
rm -rf $BUILD_RESULT_PATH/*

ng build
mv $BUILD_RESULT_PATH/* ../