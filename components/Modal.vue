<template>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <img id="appModalIcon" :src="childData.iconUrl" class="me-3 rounded-circle" height="50px" data-pg-name="App Modal Icon">
        <h5 id="appModalName" class="modal-title">
          {{ childData.title }}
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div class="modal-body">
        <div>
          <ul id="pills-tab" class="mb-3 nav nav-pills" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                id="pills-information-tab"
                class="active nav-link"
                data-bs-toggle="pill"
                href="#tab-description"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="true"
              >Informazioni</a>
            </li>
          </ul>
          <div id="pills-tabContent" class="tab-content">
            <div id="tab-description" class="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-information-tab">
              <p id="appModalDescription">
                {{ modalID.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" data-bs-dismiss="modal" class="btn btn-link">
          Chiudi
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    childData: {
      type: Object,
      required: true
    },
    parentData: {
      type: Object,
      requried: true
    }
  }
}
</script>
