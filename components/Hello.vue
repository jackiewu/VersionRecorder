<template>
	<div>
		<label for="version">Version code</label>
		<input type="text" v-model="version" size="8">
		<br>
		<input type="checkbox" id="important" v-model="isImportant">
		<label for="important">Important</label>
		<br>
		<textarea v-model="items" rows="8" cols="50"></textarea>
		<br>
		<textarea v-model="memo" rows="2" cols="50"></textarea>
		<hr>
		<div style="text-align:left">
			<h4>Preview</h4>
			開發部門正準備更新 RA & TM 版本 <span v-if="isImportant">V</span><span v-else>v</span>{{ newVersion }}<br>
			<br>
			此次修正:
			<div>
				<span v-html="mdItems"></span>

				=== 備註 === <br>
				{{ memo }}
			</div>
		</div>
	</div>
</template>

<script>
import MarkdownIt from "markdown-it";
import { nextVersion } from "../library";

export default {
  name: "hello",
  data() {
    return {
      version: "3.7.72",
      items: "",
      memo: "直接上版即可，感謝",
      isImportant: false
    };
  },
  computed: {
    newVersion() {
      return nextVersion(this.version);
    },
    mdItems() {
      const mdp = new MarkdownIt({ breaks: true });
      return mdp.render(this.items);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
