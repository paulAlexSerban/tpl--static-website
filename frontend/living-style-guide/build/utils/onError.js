import notify from "gulp-notify";

export const onError = (err) => {
  notify.onError({
    title: "Gulp",
    subtitle: "Failure!",
    message: "Error: <%= error.message %>",
    sound: "Beep",
  })(err);

  this.emit("end");
};
