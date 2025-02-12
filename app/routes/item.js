import Route from "@ember/routing/route";

export default class ItemRoute extends Route {
  moodel(params) {
    const { id } = params;

    return id;
  }
}
