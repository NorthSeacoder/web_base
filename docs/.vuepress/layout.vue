<template functional>
  <div>
      <div class="preview">
        <slot name="preview"></slot>    
        <div id="box"></div>
      </div>
      <div class="editor">
        <slot name="editor"></slot>
      </div>
  </div>
</template>