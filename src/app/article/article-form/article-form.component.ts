import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as jsonData from 'src/assets/data/article.json';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  Editor = ClassicEditor;
  title = '';
  editorData = '';
  jsonData: any[] = (jsonData as any).default;
  ckeditorConfigs = { toolbar: [ 'heading', '|', 'bold', 'italic' ], placeholder: 'Type the content here!' };

  constructor() {}

  ngOnInit() {}

  onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

  onSubmit() {
    console.log(this.editorData);
    if (typeof this.jsonData === 'object' && this.jsonData.length >= 0) {
      this.jsonData.push({ title: this.title, content: this.editorData });
    }
    console.log(this.jsonData);
  }
}
