let imgBox = document.getElementById("imgBox");
      let qrImage = document.getElementById("qrImage");
      let qrText = document.getElementById("qrText");
      const SNSicons = document.getElementById("SNSicons");

      function generateQR() {
        if (qrText.value.length > 0) {
          qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=QRcodeGenerator&format=svg" +
            qrText.value;
          imgBox.classList.add("show-img");
          SNSicons.classList.add("on");
        } else {
          qrText.classList.add("error");
          setTimeout(() => {
            qrText.classList.remove("error");
          }, 500);
        }
      }

