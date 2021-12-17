<template>
  <div>
    <section class="text-white" data-pg-name="Footer" style="background-color: #05004E;" data-pgc="footer">
      <div class="bg-white container-fluid p-0">
        <img src="/img/Footer.svg" class="img-fluid" data-pgc-field="footerimage">
      </div>
      <div class="container pt-3">
        <img src="/img/moocloud-logo-white" alt="MooCloud" height="50">
        <div class="pb-3 pt-3 row">
          <div class="col-md-3">
            <p>{{ $t('Footer_tag1') }}<br>{{ $t('Footer_tag2') }}<br>{{ $t('Footer_tag3') }}</p>
          </div>
          <div class="col-md-3">
            <h5 class="ms-2">
              {{ $t('Footer_title1') }}
            </h5>
            <div role="group" aria-label="Basic example" class="btn-group-sm btn-group-vertical text-white w-100">
              <a class="btn btn-link text-left text-start text-white" href="managed-shared-cloud/">{{ $t('Hosting Cloud') }}</a>
              <a class="btn btn-link text-left text-start text-white" href="Managed_Hosting/">{{ $t('Cloud Gestito') }} </a>
              <a class="btn btn-link text-left text-start text-white" href="managed-vps-hosting/">{{ $t('Server VPS') }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
