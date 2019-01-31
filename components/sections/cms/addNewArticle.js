// import { Editor } from "@tinymce/tinymce-react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./react-draft-wysiwyg.css";

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/static/img/");
    // xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const AddNewArticle = props => {
  return (
    <div className="h-full w-full">
      <div className="pt-8 ">
        <h3 className="font-bold text-3xl">Add New Article</h3>
      </div>
      <div className="w-main mx-auto p-2 mt-16 text-grey">
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Title:
          </label>
          <input type="text" className="p-2 w-full" placeholder="" />
        </div>
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Category:
          </label>
          <select className="w-full p-2">
            <option className="p-2">New Releases</option>
            <option className="p-2">Events</option>
            <option className="p-2">Tips</option>
            <option className="p-2">Growing</option>
            <option className="p-2">News</option>
          </select>
        </div>
        <div className="inline-flex font-bold w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Text:
          </label>
          {/* <textarea
            type="textarea"
            rows="10"
            cols="30"
            className="p-2 w-full"
            placeholder=""
          /> */}
          {/* <Editor
            apiKey="xy82c5zvbn82k7k3z2hrwsqb5e82wo5173ctol90pf61jdba"
            initialValue="<p>Type here...</p>"
            init={{
              plugins:
                "link image code autoresize media preview advcode visualblocks",
              toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright | code | media | visualblocks"
            }}
            onChange={this.handleEditorChange}
          /> */}
          <div className="inline-flex w-full">
            <Editor
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: uploadImageCallBack,
                  alt: { present: true, mandatory: true }
                }
              }}
            />
          </div>
        </div>
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Add Media:
          </label>
          <button className="p-2 bg-grey-lightest rounded text-grey font-bold">
            Click here to Select in your computer...
          </button>
        </div>
        <div className="inline-flex font-bold items-center flex w-full mt-4">
          <label className="mr-4 font-bold text-lg uppercase w-150 text-left text-grey-light opacity-50">
            Keywords:
          </label>
          <button className="p-2 bg-red-light rounded text-white font-bold mr-2">
            Marijuana Seeds
          </button>
          <button className="p-2 bg-red-light rounded text-white font-bold mx-2">
            Purple Kush
          </button>
          <button className="p-2 bg-red-light rounded text-white font-bold ml-2">
            CKS Seeds
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewArticle;
