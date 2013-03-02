<%- include('header.ejs', locals) %>

<div class="row">
  <div class="span3">
    <%- include('aside.ejs', locals) %>
  </div>
  <div class="span9">
    <div class="page-header">
      <h3><%- pageTitle %></h3>
    </div>

    <div class="pagination">
      <ul>
      <% if (page > 0) { %>
        <li><a href="/browse/<%= browseby %>/<%= page - 1 %>/">&larr;</a></li>
      <% } %>
      <li class="active"><a href="#"><%= page + 1 %></a></li>
      <% if (items.length >= pageSize) { %>
        <li><a href="/browse/<%= browseby %>/<%= page + 1 %>/">&rarr;</a></li>
      <% } %>
      </ul>
    </div>

    <table class="table table-striped">
    <%
    items = items.filter(function (p) { return p.name })

    if (items.length) {
      items.forEach(function (p) {
        if (!p.name) return
        %>
        <tr>
          <th><a href="<%= p.url %>"><%= p.name %></a></th>
          <td><%= p.description || '--' %></td>
        </tr>
        <%
      })
    } else {
      %>
      <tr><td colspan="2">No items found.</td></tr>
      <%
    }
    %>
    </table>

    <div class="pagination">
      <ul>
      <% if (page > 0) { %>
        <li><a href="/browse/<%= browseby %>/<%= page - 1 %>/">&larr;</a></li>
      <% } %>
      <li class="active"><a href="#"><%= page + 1 %></a></li>
      <% if (items.length >= pageSize) { %>
        <li><a href="/browse/<%= browseby %>/<%= page + 1 %>/">&rarr;</a></li>
      <% } %>
      </ul>
    </div>
  </div>
</div>

<%- include('footer.ejs', locals) %>
