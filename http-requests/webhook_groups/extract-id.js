client.test("Request executed successfully", function () {
  client.assert(response.status === 201, "Response status is not 200");
  client.global.set("webhook_group_id", response.body.id);
});
