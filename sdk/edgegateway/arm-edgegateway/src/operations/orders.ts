/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/ordersMappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClientContext } from "../dataBoxEdgeManagementClientContext";

/** Class representing a Orders. */
export class Orders {
  private readonly client: DataBoxEdgeManagementClientContext;

  /**
   * Create a Orders.
   * @param {DataBoxEdgeManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataBoxEdgeManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary Lists all the orders related to a data box edge/gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.OrdersListByDataBoxEdgeDeviceResponse>
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.OrdersListByDataBoxEdgeDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.OrderList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OrderList>): void;
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OrderList>, callback?: msRest.ServiceCallback<Models.OrderList>): Promise<Models.OrdersListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      listByDataBoxEdgeDeviceOperationSpec,
      callback) as Promise<Models.OrdersListByDataBoxEdgeDeviceResponse>;
  }

  /**
   * @summary Gets a specific order by name.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.OrdersGetResponse>
   */
  get(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.OrdersGetResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  get(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.Order>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Order>): void;
  get(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Order>, callback?: msRest.ServiceCallback<Models.Order>): Promise<Models.OrdersGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OrdersGetResponse>;
  }

  /**
   * @summary Creates or updates an order.
   * @param deviceName The device name.
   * @param order The order to be created or updated.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.OrdersCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, order: Models.Order, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.OrdersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,order,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OrdersCreateOrUpdateResponse>;
  }

  /**
   * @summary Deletes the order related to the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary Creates or updates an order.
   * @param deviceName The device name.
   * @param order The order to be created or updated.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, order: Models.Order, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        order,
        resourceGroupName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * @summary Deletes the order related to the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary Lists all the orders related to a data box edge/gateway device.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OrdersListByDataBoxEdgeDeviceNextResponse>
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OrdersListByDataBoxEdgeDeviceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OrderList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OrderList>): void;
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OrderList>, callback?: msRest.ServiceCallback<Models.OrderList>): Promise<Models.OrdersListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDataBoxEdgeDeviceNextOperationSpec,
      callback) as Promise<Models.OrdersListByDataBoxEdgeDeviceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDataBoxEdgeDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OrderList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "order",
    mapper: {
      ...Mappers.Order,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDataBoxEdgeDeviceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OrderList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
