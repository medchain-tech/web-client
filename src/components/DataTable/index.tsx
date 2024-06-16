import { type JSXElement } from "solid-js";
import "./index.scss";
import { showModal } from "@/stores/modals";

const DataTable = (): JSXElement => {

  // @TODO - move the logic to the page components
  const openAddStaffForm = () => {
    showModal("add-staff")
  }

  return <section class="dtable">

    <div class="dtable-header">
      <h3 class="dtable-header-heading">Staff Records</h3>
      <div class="dtable-header-button-bar">
        <button class="dtable-header-button" style="--border: 1px solid var(--clr-content-4)">View</button>
        <button class="dtable-header-button" style="--bg: var(--clr-primary-pressed); --clr: var(--clr-bg-secondary)" onClick={openAddStaffForm}>Add Staff</button>
      </div>
    </div>


    <div class="dtable-search-bar">

      <form class="dtable-search-form">
        <div class="dtable-search-form-field">
          <label class="dtable-search-form-label" for="dtable-search">
            <svg viewBox="0 0 24 24">
              <title>Search</title>
              <use href="#search"></use>
            </svg>
          </label>
          <input id="dtable-search" type="search" class="dtable-search-form-input" placeholder="Search your orders" />
        </div>
        <button class="dtable-search-form-submit">Search</button>
      </form>


      <form class="dtable-filter-form">
        <select class="dtable-filter-select">
          <option>Speciality</option>
        </select>
        <select class="dtable-filter-select">
          <option>Location</option>
        </select>
        <select class="dtable-filter-select">
          <option>Unit</option>
        </select>
      </form>

    </div>


    <div class="dtable-table-wrapper">
      <table class="dtable-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Unit</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr Dare Ishola</td>
            <td>Dermatologist</td>
            <td>Dermatology Clinic</td>
            <td>Lagos, Nigeria</td>
            <td><button class="dtable-table-button">View</button></td>
          </tr>
          <tr>
            <td>Dr Dare Ishola</td>
            <td>Dermatologist</td>
            <td>Dermatology Clinic</td>
            <td>Lagos, Nigeria</td>
            <td><button class="dtable-table-button">View</button></td>
          </tr>
          <tr>
            <td>Dr Dare Ishola</td>
            <td>Dermatologist</td>
            <td>Dermatology Clinic</td>
            <td>Lagos, Nigeria</td>
            <td><button class="dtable-table-button">View</button></td>
          </tr>
          <tr>
            <td>Dr Dare Ishola</td>
            <td>Dermatologist</td>
            <td>Dermatology Clinic</td>
            <td>Lagos, Nigeria</td>
            <td><button class="dtable-table-button">View</button></td>
          </tr>
          <tr>
            <td>Dr Dare Ishola</td>
            <td>Dermatologist</td>
            <td>Dermatology Clinic</td>
            <td>Lagos, Nigeria</td>
            <td><button class="dtable-table-button">View</button></td>
          </tr>
          <tr>
            <td>Dr Dare Ishola</td>
            <td>Dermatologist</td>
            <td>Dermatology Clinic</td>
            <td>Lagos, Nigeria</td>
            <td><button class="dtable-table-button">View</button></td>
          </tr>

        </tbody>
      </table>
    </div>



    <div class="dtable-nav">
      <button class="dtable-nav-button" title="previous">
        <svg viewBox="0 0 24 24" role="presentation">
          <use href="#left"></use>
        </svg>

        <span>Previous</span>
      </button>

      <button class="dtable-nav-button" title="next">
        <span>Next</span>

        <svg viewBox="0 0 24 24" role="presentation">
          <use href="#right"></use>
        </svg>
      </button>

      <div class="dtable-nav-pages">
        <a aria-current="page" href="#" class="dtable-nav-page">1</a>
        <a href="#" class="dtable-nav-page">2</a>
        <a href="#" class="dtable-nav-page">3</a>
        <span aria-hidden="true" class="dtable-nav-breadcrumbs">...</span>
        <a href="#" class="dtable-nav-page">7</a>
        <a href="#" class="dtable-nav-page">9</a>
        <a href="#" class="dtable-nav-page">10</a>
      </div>

    </div>

  </section>
}


export default DataTable
